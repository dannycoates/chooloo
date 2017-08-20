const assets = require('../app/assets')
const locales = require('../app/locales')
const routes = require('./routes')

module.exports = function (app, devServer) {
  assets.setMiddleware(devServer.middleware)
  locales.setMiddleware(devServer.middleware)
  routes(app)
}
