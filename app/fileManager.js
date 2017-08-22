import FileSender from './fileSender';
import FileReceiver from './fileReceiver';
import { delay, fadeOut } from './utils';

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

export default function(state, emitter) {
  function render() {
    emitter.emit('render');
  }

  emitter.on('delete', async fileInfo => {
    try {
      await FileSender.delete(fileInfo.id, fileInfo.deleteToken);
      state.files = state.files.filter(f => f !== fileInfo);
      state.ui.panel = 'welcome';
      state.fileInfo = null;
      state.transfer = null;
    } catch (e) {}
    render();
  });

  emitter.on('upload', async file => {
    const sender = new FileSender(file);
    sender.on('progress', render);
    sender.on('encrypting', render);
    state.fileInfo = file;
    state.transfer = sender;
    state.ui.panel = 'upload';
    render();
    const links = openLinksInNewTab();
    await delay(200);
    const info = await sender.upload();
    await delay(1000);
    await fadeOut('upload-progress');
    state.ui.panel = 'share';
    state.fileInfo.url = `${info.url}#${info.secretKey}`;
    state.fileInfo.id = info.id;
    state.fileInfo.deleteToken = info.deleteToken;
    openLinksInNewTab(links, false);
    render();
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
    const f = await receiver.download();
    saveFile(f);
    state.ui.panel = 'completed';
    openLinksInNewTab(links, false);
    render();
  });
}
