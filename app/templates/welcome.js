const html = require('choo/html');
const assets = require('../../common/assets');
const fileList = require('./fileList');
const { fadeOut } = require('../utils');

module.exports = function(state, emit) {
  const div = html`
  <div id="page-one" class="fadeIn">
    <div class="title">${state.translate('uploadPageHeader')}</div>
    <div class="description">
      <div>${state.translate('uploadPageExplainer')}</div>
      <a href="https://testpilot.firefox.com/experiments/send" class="link">${state.translate(
        'uploadPageLearnMore'
      )}</a>
    </div>
    <div class="upload-window" ondragover=${dragover} ondragleave=${dragleave}>
      <div id="upload-img"><img src="${assets.get(
        'upload.svg'
      )}" title="${state.translate('uploadSvgAlt')}"/></div>
      <div id="upload-text">${state.translate('uploadPageDropMessage')}</div>
      <span id="file-size-msg"><em>${state.translate(
        'uploadPageSizeMessage'
      )}</em></span>
      <form method="post" action="upload" enctype="multipart/form-data">
        <label for="file-upload" id="browse" class="btn">${state.translate(
          'uploadPageBrowseButton1'
        )}</label>
        <input id="file-upload" type="file" name="fileUploaded" onchange=${upload} />
      </form>
    </div>
    ${fileList(state, emit)}
  </div>
  `;

  function dragover(event) {
    event.target.classList.add('ondrag');
  }

  function dragleave(event) {
    event.target.classList.remove('ondrag');
  }

  async function upload(event) {
    event.preventDefault();
    const target = event.target;
    const fileInfo = target.files[0];
    await fadeOut('page-one');
    emit('upload', fileInfo);
  }

  if (state.layout) {
    return state.layout(state, div);
  }
  return div;
};
