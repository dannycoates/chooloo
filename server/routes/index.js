const app = require('../../app/app')
const layout = require('../layout')
const locales = require('../../app/locales')

module.exports = function (req, res) {
  res.send(app.toString('/', {
    locale: 'ast',
    translate: locales.getTranslator('ast'),
    title: 'Firefox Send',
    description: 'Yo!',
    baseUrl: 'http://localhost:3000',
    layout,
    files: []}))
}
