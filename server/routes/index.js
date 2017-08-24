const busboy = require('connect-busboy');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const requestLanguage = require('express-request-language');
const { availableLanguages } = require('../../package.json');
const storage = require('../storage');
const config = require('../config');
const defaults = require('./defaults');
const versionFile = require.resolve('../../dist/version.json');
// const lang = require('fluent-langneg')

module.exports = function(app) {
  app.use(
    requestLanguage({
      languages: availableLanguages
    })
  );
  app.use(helmet());
  app.use(
    helmet.hsts({
      maxAge: 31536000,
      force: config.env === 'production'
    })
  );
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: [
          "'self'",
          'https://sentry.prod.mozaws.net',
          'https://www.google-analytics.com'
        ],
        imgSrc: ["'self'", 'https://www.google-analytics.com'],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https://code.cdn.mozilla.net'],
        fontSrc: ["'self'", 'https://code.cdn.mozilla.net'],
        formAction: ["'none'"],
        frameAncestors: ["'none'"],
        objectSrc: ["'none'"],
        reportUri: '/__cspreport__'
      }
    })
  );
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
  app.get('/share/:id', defaults.blank);
  app.get('/download/:id', defaults.download);
  app.get('/completed', defaults.blank);
  app.get('/unsupported/:reason', defaults.unsupported);
  app.post('/api/upload', require('./upload'));
  app.get('/api/download/:id', require('./download'));
  app.get('/api/exists/:id', require('./exists'));
  app.post('/api/delete/:id', require('./delete'));

  app.get('/__version__', function(req, res) {
    res.sendFile(versionFile);
  });

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
