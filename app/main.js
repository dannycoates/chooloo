import app from './routes'
import log from 'choo-log'
import locale from '../common/locales'
import FileReceiver from './fileReceiver'
import fileManager from './fileManager'
import dragManager from './dragManager'

app.use(log())

app.use((state, emitter) => {
  // init state
  state.translate = locale.getTranslator()
  state.files = []
})

app.use(fileManager)
app.use(dragManager)

app.mount('#page-one')
