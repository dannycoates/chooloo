const routes = require('../../app/routes')
const layout = require('../layout')
const locales = require('../../app/locales')

module.exports = function (req, res) {
  res.send(routes.toString('/', {
    locale: 'ast',
    translate: locales.getTranslator('ast'),
    title: 'Firefox Send',
    description: 'Yo!',
    baseUrl: 'http://localhost:3000',
    layout,
    files: []}))
}
