import app from './routes'
import log from 'choo-log'
import locale from './locales'
import FileReceiver from './fileReceiver'
import uploadManager from './uploadManager'

app.use(log())

app.use((state, emitter) => {
  // init state
  state.translate = locale.getTranslator()
  state.files = []
//   state.files = [
//   {
//     name: 'foo.bar.boss',
//     size: 9999,
//     fileId: 'abcd',
//     url: 'http://localhost:3000/',
//     secretKey: 'abcdefgh',
//     deleteToken: 'xxxx',
//     creationDate: new Date(),
//     expiry: 1111,
//     totalTime: 2222,
//     typeOfUpload: 'click',
//     uploadSpeed: 3333
//   }
// ]
})

app.use((state, emitter) => {

})

app.use(uploadManager)

app.mount('#page-one')
