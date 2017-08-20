import FileSender from './fileSender'
import FileReceiver from './fileReceiver'

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

export default function (state, emitter) {
  function render() {
    emitter.emit('render')
  }

  emitter.on('delete', file => {
    FileSender.delete(file.fileId, file.deleteToken)
    state.files = state.files.filter(f => f !== file)
    render()
  })

  emitter.on('upload', file => {
    const sender = new FileSender(file)
    sender.on('progress', render)
    sender.on('encrypting', render)
    state.file = file
    state.sender = sender
    state.panel = 'upload'
    render()
    setTimeout(() =>
    sender.upload().then(info => {
      state.panel = 'share'
      state.upload = info
      render()
    }), 500)
  })

  emitter.on('download', file => {
    const url = `/api/download/${file.id}`
    const receiver = new FileReceiver(url, file.key)
    receiver.on('progress', render)
    receiver.on('decrypting', render)
    state.receiver = receiver
    state.panel = 'download'
    render()
    receiver.download().then(f => {
      saveFile(f)
      state.panel = 'completed'
      render()
    })
  })
}
