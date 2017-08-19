const assets = require('../app/assets')
const locales = require('../app/locales')
const index = require('./routes')

module.exports = function (app, devServer) {
  assets.setMiddleware(devServer.middleware)
  locales.setMiddleware(devServer.middleware)
  app.get('/', index)
}
