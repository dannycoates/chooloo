import app from './routes'
import log from 'choo-log'
import locale from '../common/locales'
import FileReceiver from './fileReceiver'
import uploadManager from './uploadManager'

app.use(log())

app.use((state, emitter) => {
  // init state
  state.translate = locale.getTranslator()
  state.files = []
})

app.use(uploadManager)

app.mount('#page-one')
