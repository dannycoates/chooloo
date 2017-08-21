const html = require('choo/html');
const progress = require('./progress');
const { bytes } = require('../utils');

module.exports = function(state, emit) {
  const sender = state.sender;
  const div = html`
  <div id="upload-progress" class="fadeIn">
    <div class="title" id="upload-filename">${state.translate(
      'uploadingPageProgress',
      {
        filename: sender.file.name,
        size: bytes(sender.file.size)
      }
    )}</div>
    <div class="description"></div>
    ${progress(state.sender)}
    <div class="upload">
      <div class="progress-text">${state.translate(sender.msg)}</div>
      <div id="cancel-upload">${state.translate('uploadingPageCancel')}</div>
    </div>
  </div>
  `;
  return div;
};
