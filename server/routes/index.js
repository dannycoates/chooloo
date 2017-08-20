const busboy = require('connect-busboy');
const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(helmet());
  app.use(
    busboy({
    // limits: {
    //   fileSize: conf.max_file_size
    // }
    })
  );
  app.use(bodyParser.json());
  app.get('/', require('./default'))
  app.post('/api/upload', require('./upload'))

  app.get('/__lbheartbeat__', function (req, res) {
    res.sendStatus(200)
  })
}
