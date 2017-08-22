const choo = require('choo');
const home = require('./home');
const download = require('./download');
const unsupported = require('../templates/unsupported');
const legal = require('../templates/legal');
const notFound = require('../templates/notFound');

const app = choo();

app.route('/', home);
app.route('/download/:id', download);
app.route('/download/:id/:key', download);
app.route('/unsupported/:reason', unsupported);
app.route('/legal', legal);
app.route('*', notFound);

module.exports = app;
