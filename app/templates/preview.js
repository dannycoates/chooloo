const html = require('choo/html')
const assets = require('../../common/assets')
const notFound = require('./notFound')
const { bytes } = require('../utils')

function getFileFromDOM() {
  const el = document.getElementById('dl-file')
  if (!el) { return null }
  const data = el.dataset;
  return {
    name: data.name,
    size: parseInt(data.size, 10),
    ttl: parseInt(data.ttl, 10)
  }
}

module.exports = function (state, emit) {
  state.file = state.file || getFileFromDOM()
  if (!state.file) {
    return notFound(state, emit)
  }
  state.file.id = state.params.fileId
  state.file.key = state.params.key
  const file = state.file
  const size = bytes(file.size)
  const div = html`
  <div id="page-one">
    <div id="download">
      <div id="download-page-one">
        <div class="title">
          <span id="dl-file"
            data-name="${file.name}"
            data-size="${file.size}"
            data-ttl="${file.ttl}">${state.translate('downloadingPageProgress', {filename: file.name, size })}</span>
        </div>
        <div class="description">${state.translate('downloadMessage')}</div>
        <img src="${assets.get('illustration_download.svg')}" id="download-img" alt="${state.translate('downloadAltText')}"/>
        <div>
          <button id="download-btn" class="btn" onclick=${download}>${state.translate('downloadButtonLabel')}</button>
        </div>
      </div>
    </div>
  </div>
  `
  function download(event) {
    event.preventDefault()
    emit('download', file)
  }

  if (state.layout) {
    return state.layout(state, div)
  }
  return div
}
