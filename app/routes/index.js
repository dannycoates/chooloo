const choo = require('choo')
const home = require('./home')
const download = require('./download')

const app = choo()

app.route('/', home)
app.route('/download/:fileId', download)
app.route('/download/:fileId/:key', download)

module.exports = app
