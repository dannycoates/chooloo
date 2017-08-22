const html = require('choo/html');
const progress = require('./progress');
const { bytes } = require('../utils');

module.exports = function(state, emit) {
  const transfer = state.transfer;

  const div = html`
  <div id="upload-progress" class="fadeIn">
    <div class="title" id="upload-filename">${state.translate(
      'uploadingPageProgress',
      {
        filename: transfer.file.name,
        size: bytes(transfer.file.size)
      }
    )}</div>
    <div class="description"></div>
    ${progress(transfer)}
    <div class="upload">
      <div class="progress-text">${state.translate(transfer.msg, transfer.sizes)}</div>
      <div id="cancel-upload" onclick=${cancel}>${state.translate('uploadingPageCancel')}</div>
    </div>
  </div>
  `;

  function cancel() {
    emit('cancel')
  }
  return div;
};
