import app from './app'
import locale from './locales'
import FileSender from './fileSender'
import FileReceiver from './fileReceiver'

app.use((state, emitter) => {
  // init state
  state.translate = locale.getTranslator(),
  state.files = [
  {
    name: 'foo.bar.boss',
    size: 9999,
    fileId: 'abcd',
    url: 'http://localhost:3000/',
    secretKey: 'abcdefgh',
    deleteToken: 'xxxx',
    creationDate: new Date(),
    expiry: 1111,
    totalTime: 2222,
    typeOfUpload: 'click',
    uploadSpeed: 3333
  }
]
})

app.use((state, emitter) => {
  emitter.on('delete', file => {
    // FileSender.delete(file.fileId, file.deleteToken)
    state.files = state.files.filter(f => f !== file)
    emitter.emit('render')
  })
})

app.mount('#page-one')
