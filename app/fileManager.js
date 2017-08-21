import FileSender from './fileSender'
import FileReceiver from './fileReceiver'
import { delay, fadeOut } from './utils'

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

function openLinksInNewTab(should = true) {
  const links = Array.from(document.querySelectorAll('a:not([target])'))
  if (should) {
    return links.forEach(l => {
      l.setAttribute('target', '_blank');
      l.setAttribute('rel', 'noopener noreferrer');
    });
  }
  links.forEach(l => {
      l.removeAttribute('target');
      l.removeAttribute('rel');
    });
}

export default function (state, emitter) {
  function render() {
    emitter.emit('render')
  }

  emitter.on('delete', async (file) => {
    try {
      await FileSender.delete(file.fileId, file.deleteToken)
      state.files = state.files.filter(f => f !== file)
      state.panel = 'welcome'
      state.upload = null
      state.file = null
      state.sender = null
    }
    catch (e) {}
    render()
  })

  emitter.on('upload', async (file) => {
    const sender = new FileSender(file)
    sender.on('progress', render)
    sender.on('encrypting', render)
    state.file = file
    state.sender = sender
    state.panel = 'upload'
    render()
    const info = await sender.upload()
    await delay(1000)
    await fadeOut('upload-progress')
    state.panel = 'share'
    state.upload = info
    render()
  })

  emitter.on('download', async (file) => {
    const url = `/api/download/${file.id}`
    const receiver = new FileReceiver(url, file.key)
    receiver.on('progress', render)
    receiver.on('decrypting', render)
    state.receiver = receiver
    state.panel = 'download'
    openLinksInNewTab()
    render()
    const f = await receiver.download()
    saveFile(f)
    state.panel = 'completed'
    openLinksInNewTab(false)
    render()
  })
}
