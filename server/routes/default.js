const routes = require('../../app/routes')
const layout = require('../layout')
const locales = require('../../common/locales')
const storage = require('../storage')

function validateID(route_id) {
  return route_id.match(/^[0-9a-fA-F]{10}$/) !== null;
}

module.exports = {
  index: function (req, res) {
    const locale = req.language || 'en-US'
    res.send(routes.toString('/', {
      locale,
      translate: locales.getTranslator(locale),
      title: 'Firefox Send',
      description: 'Yo!',
      baseUrl: 'http://localhost:3000',
      layout,
      files: []}))
    },

  download: async function (req, res, next) {
    const locale = req.language || 'en-US'
    const id = req.params.id;
    if (!validateID(id)) {
      return next();
    }

    try {
      const efilename = await storage.filename(id);
      const name = decodeURIComponent(efilename);
      const size = await storage.length(id);
      const ttl = await storage.ttl(id);
      res.send(routes.toString(`/download/${req.params.id}`, {
        locale,
        translate: locales.getTranslator(locale),
        title: 'Firefox Send',
        description: 'Yo!',
        baseUrl: 'http://localhost:3000',
        layout,
        file: {
          name,
          size,
          ttl
        }
      }))
    } catch (e) {
      next();
    }
  },

  unsupported: function (req, res) {
    const locale = req.language || 'en-US'
    res.send(routes.toString(`/unsupported/${req.params.reason}`, {
      locale,
      layout,
      fira: true,
      translate: locales.getTranslator(locale),
      title: 'Firefox Send',
      description: 'Yo!',
      baseUrl: 'http://localhost:3000'
    }))
  },

  legal: function (req, res) {
    const locale = req.language || 'en-US'
    res.send(routes.toString('/legal', {
      locale,
      layout,
      translate: locales.getTranslator(locale),
      title: 'Firefox Send',
      description: 'Yo!',
      baseUrl: 'http://localhost:3000'
    }))
  },

  notfound: function (req, res) {
    const locale = req.language || 'en-US'
    res.status(404).send(routes.toString('/404', {
      locale,
      layout,
      translate: locales.getTranslator(locale),
      title: 'Firefox Send',
      description: 'Yo!',
      baseUrl: 'http://localhost:3000'
    }))
  }
}
