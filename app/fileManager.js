import FileSender from './fileSender';
import FileReceiver from './fileReceiver';
import { copyToClipboard, delay, fadeOut } from './utils';

function saveFile(file) {
  const dataView = new DataView(file.plaintext);
  const blob = new Blob([dataView], { type: file.type });
  const downloadUrl = URL.createObjectURL(blob);

  if (window.navigator.msSaveBlob) {
    return window.navigator.msSaveBlob(blob, file.name);
  }
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(downloadUrl);
}

function openLinksInNewTab(links, should = true) {
  links = links || Array.from(document.querySelectorAll('a:not([target])'));
  if (should) {
    links.forEach(l => {
      l.setAttribute('target', '_blank');
      l.setAttribute('rel', 'noopener noreferrer');
    });
  } else {
    links.forEach(l => {
      l.removeAttribute('target');
      l.removeAttribute('rel');
    });
  }
  return links;
}

function exists(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        resolve(xhr.status === 200);
      }
    };
    xhr.onerror = () => resolve(false);
    xhr.ontimeout = () => resolve(false);
    xhr.open('get', '/api/exists/' + id);
    xhr.timeout = 2000;
    xhr.send();
  });
}

export default function(state, emitter) {
  let lastRender = 0;

  function render() {
    emitter.emit('render');
  }

  async function checkFiles() {
    const files = state.storage.files;
    let rerender = false;
    for (let file of files) {
      const ok = await exists(file.id)
      if (!ok) {
        state.storage.remove(file.id);
        rerender = true;
       }
    }
    if (rerender) { render() }
  }

  emitter.on('DOMContentLoaded', checkFiles)

  emitter.on('navigate', checkFiles)

  emitter.on('render', () => {
    lastRender = Date.now()
  })

  emitter.on('delete', async fileInfo => {
    try {
      await FileSender.delete(fileInfo.id, fileInfo.deleteToken);
      state.storage.remove(fileInfo.id);
    } catch (e) {}
    state.ui.panel = 'welcome';
    state.fileInfo = null;
    state.transfer = null;
    render();
  });

  emitter.on('cancel', () => {
    state.transfer.cancel()
    if (state.route === '/') {
      state.ui.panel = 'welcome';
      render();
    }
    else {
      emitter.emit('pushState', '/');
    }
  })

  emitter.on('upload', async file => {
    const sender = new FileSender(file);
    sender.on('progress', render);
    sender.on('encrypting', render);
    state.transfer = sender;
    state.ui.panel = 'upload';
    render();
    const links = openLinksInNewTab();
    await delay(200);
    try {
      const info = await sender.upload();
      await delay(1000);
      await fadeOut('upload-progress');
      info.name = file.name; // TODO move to sender
      info.createdAt = Date.now()
      info.url = `${info.url}#${info.secretKey}`;
      info.expiresAt = Date.now() + (EXPIRE_SECONDS * 1000);
      state.fileInfo = info;
      state.storage.addFile(state.fileInfo);
      openLinksInNewTab(links, false);
      state.ui.panel = 'share';
      render();
    }
    catch (e) {
      if (e.message === '0') {
        //cancelled. do nothing
        console.log('upload cancelled');
        return;
      }
      emitter.emit('replaceState', '/error');
    }
  });

  emitter.on('download', async file => {
    const url = `/api/download/${file.id}`;
    const receiver = new FileReceiver(url, file.key);
    receiver.on('progress', render);
    receiver.on('decrypting', render);
    state.transfer = receiver;
    state.ui.panel = 'download';
    const links = openLinksInNewTab();
    render();
    try {
      const f = await receiver.download();
      saveFile(f);
      state.ui.panel = 'completed';
      render();
    }
    catch (e) {
      const location = e.message === 'notfound' ? '/404' : '/error'
      emitter.emit('replaceState', location)
    }
    finally {
      openLinksInNewTab(links, false);
    }

  });

  emitter.on('copy', url => {
    copyToClipboard(url)
  })

  setInterval(() => {
    if (
      state.route === '/' &&
      state.ui.panel === 'welcome' &&
      state.storage.files.length > 0 &&
      Date.now() - lastRender > 30000) {
      console.log('rerender')
      render()
    }
  }, 60000)
}
