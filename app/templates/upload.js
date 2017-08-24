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
    ${progress(transfer.progressRatio)}
    <div class="upload">
      <div class="progress-text">${state.translate(
        transfer.msg,
        transfer.sizes
      )}</div>
      <button id="cancel-upload" onclick=${cancel}>${state.translate(
    'uploadingPageCancel'
  )}</button>
    </div>
  </div>
  `;

  function cancel() {
    const btn = document.getElementById('cancel-upload');
    btn.disabled = true;
    btn.textContent = state.translate('uploadCancelNotification');
    emit('cancel');
  }
  return div;
};
