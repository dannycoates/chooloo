const busboy = require('connect-busboy');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const requestLanguage = require('express-request-language')
const { availableLanguages } = require('../../package.json')
const config = require('../config')
const defaults = require('./default')
// const lang = require('fluent-langneg')

module.exports = function (app) {
  app.use(requestLanguage({
    languages: availableLanguages
  }))
  app.use(helmet());
  app.use(
    busboy({
      limits: {
        fileSize: config.max_file_size
      }
    })
  );
  app.use(bodyParser.json());
  app.get('/', defaults.index)
  app.get('/download/:id', defaults.download)
  app.post('/api/upload', require('./upload'))
  app.get('/api/download/:id', require('./download'))

  app.get('/__lbheartbeat__', function (req, res) {
    res.sendStatus(200)
  })
}
