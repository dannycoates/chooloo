const assets = require('../common/assets');
const locales = require('../common/locales');
const routes = require('./routes');
const defaults = require('./routes/defaults');

module.exports = function(app, devServer) {
  assets.setMiddleware(devServer.middleware);
  locales.setMiddleware(devServer.middleware);
  routes(app);
  process.nextTick(() => app.use(defaults.notfound));
};
