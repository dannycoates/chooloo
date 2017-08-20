const html = require('choo/html')
const assets = require('../assets')
const fileList = require('./file_list')

module.exports = function (state, emit) {
  const div = html`
  <div id="page-one">
    <div class="title">${state.translate('uploadPageHeader')}</div>
    <div class="description">
      <div>${state.translate('uploadPageExplainer')}</div>
      <a href="https://testpilot.firefox.com/experiments/send" class="link">${state.translate('uploadPageLearnMore')}</a>
    </div>
    <div class="upload-window" >
      <div id="upload-img"><img src="${assets.get('upload.svg')}"/>${state.translate('uploadSvgAlt')}</div>
      <div id="upload-text">${state.translate('uploadPageDropMessage')}</div>
      <span id="file-size-msg"><em>${state.translate('uploadPageSizeMessage')}</em></span>
      <form method="post" action="upload" enctype="multipart/form-data">
        <label for="file-upload" id="browse" class="btn">${state.translate('uploadPageBrowseButton1')}</label>
        <input id="file-upload" type="file" name="fileUploaded" onchange=${upload} />
      </form>
    </div>
    ${fileList(state, emit)}
  </div>
  `;

  function upload(event) {
    event.preventDefault();
    const clickOrDrop = event.type === 'drop' ? 'drop' : 'click';
    const target = clickOrDrop === 'drop' ? event.dataTransfer : event.target;
    if (clickOrDrop === 'drop') {
      emit('endDrag');
    }
    if (target.files.length === 0) {
      return;
    }
    if (target.files.length > 1 || target.files[0].size === 0) {
      return alert(state.translate('uploadPageMultipleFilesAlert'))
    }
    const file = target.files[0];
    emit('upload', file)
  }

  if (state.layout) {
    return state.layout(state, div)
  }
  return div;
}
