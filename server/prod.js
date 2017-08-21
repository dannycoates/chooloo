const express = require('express');
const path = require('path');
const routes = require('./routes');
const defaults = require('./routes/default');

const app = express();

app.use(
  express.static(path.resolve(__dirname, '../dist/'), {
    setHeaders: function(res) {
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
  })
);

routes(app);

app.use(defaults.notfound);

app.listen(1443);
