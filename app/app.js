const choo = require('choo')
const upload = require('./upload')

const app = choo()

app.route('/', upload)

module.exports = app
