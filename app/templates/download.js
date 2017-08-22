const html = require('choo/html');
const progress = require('./progress');
const { bytes } = require('../utils');

module.exports = function(state, emit) {
  const transfer = state.transfer;
  const div = html`
  <div id="download-progress">
    <div id="dl-title" class="title">${state.translate(
      'downloadingPageProgress',
      {
        filename: state.fileInfo.name,
        size: bytes(state.fileInfo.size)
      }
    )}</div>
    <div class="description">${state.translate('downloadingPageMessage')}</div>
    ${progress(transfer)}
    <div class="upload">
      <div class="progress-text">${state.translate(transfer.msg, transfer.sizes)}</div>
    </div>
  </div>
  `;

  return div;
};
