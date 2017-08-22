const routes = require('../../app/routes');
const storage = require('../storage');
const state = require('../state');

function validateID(route_id) {
  return route_id.match(/^[0-9a-fA-F]{10}$/) !== null;
}

module.exports = {
  index: function(req, res) {
    res.send(routes.toString('/', state(req)));
  },

  download: async function(req, res, next) {
    const id = req.params.id;
    if (!validateID(id)) {
      return next();
    }

    try {
      const efilename = await storage.filename(id);
      const name = decodeURIComponent(efilename);
      const size = await storage.length(id);
      const ttl = await storage.ttl(id);
      res.send(
        routes.toString(
          `/download/${req.params.id}`,
          Object.assign(state(req), {
            fileInfo: { name, size, ttl }
          })
        )
      );
    } catch (e) {
      next();
    }
  },

  unsupported: function(req, res) {
    res.send(
      routes.toString(
        `/unsupported/${req.params.reason}`,
        Object.assign(state(req), { fira: true })
      )
    );
  },

  legal: function(req, res) {
    res.send(routes.toString('/legal', state(req)));
  },

  notfound: function(req, res) {
    res.status(404).send(routes.toString('/404', state(req)));
  }
};
