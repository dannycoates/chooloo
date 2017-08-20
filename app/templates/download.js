const html = require('choo/html')
const progress = require('./progress')
const { bytes } = require('../utils')

module.exports = function (state, emit) {
  const receiver = state.receiver
  const div = html`
  <div id="download-progress">
    <div id="dl-title" class="title">${
      state.translate('downloadingPageProgress', {
        filename: state.file.name,
        size: bytes(state.file.size)
      })
    }</div>
    <div class="description">${state.translate('downloadingPageMessage')}</div>
    ${progress(state.receiver)}
    <div class="upload">
      <div class="progress-text">${state.translate(receiver.msg)}</div>
    </div>
  </div>
  `

  return div;
}
