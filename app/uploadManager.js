import FileSender from './fileSender'

export default function (state, emitter) {
  emitter.on('delete', file => {
    FileSender.delete(file.fileId, file.deleteToken)
    state.files = state.files.filter(f => f !== file)
    emitter.emit('render')
  })
  
  emitter.on('upload', file => {
    const sender = new FileSender(file)
    sender.on('progress', data => {
      emitter.emit('render')
    })
    sender.on('encrypting', () => {
      emitter.emit('render')
    })
    state.file = file
    state.sender = sender
    state.panel = 'upload'
    emitter.emit('render')
    sender.upload().then(info => {
      state.panel = 'share'
      state.upload = info
      emitter.emit('render')
    })
  })
}
