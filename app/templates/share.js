const html = require('choo/html')
const assets = require('../../common/assets')
const { allowedCopy, copyToClipboard, delay, fadeOut } = require('../utils')

module.exports = function (state, emit) {
  const upload = state.upload
  const file = state.file
  const url = `${upload.url}#${upload.secretKey}`
  const div = html`
  <div id="share-link" class="fadeIn">
    <div class="title">${state.translate('uploadSuccessTimingHeader')}</div>
    <div id="share-window">
      <div id="copy-text">${state.translate('copyUrlFormLabelWithName', {filename: file.name })}</div>
      <div id="copy">
        <input id="link" type="url" value="${url}" readonly="true"/>
        <button id="copy-btn" class="btn" onclick=${copyLink}>${state.translate('copyUrlFormButton')}</button>
      </div>
      <button id="delete-file" class="btn" onclick=${deleteFile}>${state.translate('deleteFileButton')}</button>
      <a class="send-new" data-state="completed" href="/" onclick=${sendNew}>${state.translate('sendAnotherFileLink')}</a>
    </div>
  </div>
  `

  async function sendNew(e) {
    state.panel = 'welcome'
    await fadeOut('share-link')
    emit('render')
  }

  async function copyLink() {
    if (allowedCopy() && copyToClipboard(url)) {
      const copyBtn = document.getElementById('copy-btn');
      copyBtn.disabled = true;
      copyBtn.replaceChild(
        html`<img src="${assets.get('check-16.svg')}" class="icon-check"></img>`,
        copyBtn.firstChild
      )
      await delay(3000)
      copyBtn.disabled = !allowedCopy();
      copyBtn.textContent = state.translate('copyUrlFormButton');
    }
  }

  async function deleteFile(e) {
    await fadeOut('share-link')
    emit('delete', state.upload)
  }
  return div;
}
