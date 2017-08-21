const busboy = require('connect-busboy');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const requestLanguage = require('express-request-language');
const { availableLanguages } = require('../../package.json');
const storage = require('../storage');
const config = require('../config');
const defaults = require('./default');
// const lang = require('fluent-langneg')

module.exports = function(app) {
  app.use(
    requestLanguage({
      languages: availableLanguages
    })
  );
  app.use(helmet());
  app.use(
    busboy({
      limits: {
        fileSize: config.max_file_size
      }
    })
  );
  app.use(bodyParser.json());
  app.get('/', defaults.index);
  app.get('/legal', defaults.legal);
  app.get('/jsconfig.js', require('./jsconfig'));
  app.get('/download/:id', defaults.download);
  app.get('/unsupported/:reason', defaults.unsupported);
  app.post('/api/upload', require('./upload'));
  app.get('/api/download/:id', require('./download'));
  app.get('/api/exists/:id', require('./exists'));
  app.post('/api/delete/:id', require('./delete'));

  app.get('/__lbheartbeat__', function(req, res) {
    res.sendStatus(200);
  });

  app.get('__heartbeat__', async (req, res) => {
    try {
      await storage.ping();
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  });
};
