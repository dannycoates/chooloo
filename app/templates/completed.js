const html = require('choo/html');
const progress = require('./progress');
const { bytes, fadeOut } = require('../utils');

module.exports = function(state, emit) {
  const receiver = state.receiver;
  const div = html`
  <div id="download">
    <div id="download-progress">
      <div id="dl-title" class="title">${state.translate(
        'downloadFinish'
      )}</div>
      <div class="description">${state.translate('downloadNotification')}</div>
      ${progress(state.receiver)}
      <div class="upload">
        <div class="progress-text">${state.translate(receiver.msg)}</div>
      </div>
    </div>
    <a class="send-new" data-state="completed" href="/" onclick=${sendNew}>${state.translate(
    'sendYourFilesLink'
  )}</a>
  </div>
  `;

  async function sendNew(e) {
    e.preventDefault();
    await fadeOut('download');
    emit('pushState', '/');
  }

  return div;
};
