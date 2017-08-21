const choo = require('choo')
const home = require('./home')
const download = require('./download')
const unsupported = require('../templates/unsupported')
const legal = require('../templates/legal')
const notFound = require('../templates/notFound')

const app = choo()

app.route('/', home)
app.route('/download/:fileId', download)
app.route('/download/:fileId/:key', download)
app.route('/unsupported/:reason', unsupported)
app.route('/legal', legal)
app.route('*', notFound)

module.exports = app
