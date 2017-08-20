const html = require('choo/html')

module.exports = function (state, emit) {
  const upload = state.upload
  const file = state.file
  const url = `${upload.url}#${upload.secretKey}`
  const div = html`
  <div id="share-link">
    <div class="title">${state.translate('uploadSuccessTimingHeader')}</div>
    <div id="share-window">
      <div id="copy-text">${state.translate('copyUrlFormLabelWithName', {filename: file.name })}</div>
      <div id="copy">
        <input id="link" type="url" value="${url}" readonly="true"/>
        <button id="copy-btn" class="btn">${state.translate('copyUrlFormButton')}</button>
      </div>
      <button id="delete-file" class="btn" onclick=${deleteFile}>${state.translate('deleteFileButton')}</button>
      <a class="send-new" data-state="completed" href="/">${state.translate('sendAnotherFileLink')}</a>
    </div>
  </div>
  `

  function deleteFile(e) {
    emit('delete', file)
  }
  return div;
}
