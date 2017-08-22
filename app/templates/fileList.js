const html = require('choo/html');
const file = require('./file');

module.exports = function(state, emit) {
  const table = html`
  <table id="uploaded-files">
    <thead>
      <tr>
        <!-- htmllint attr-bans="false" -->
        <th id="uploaded-file">${state.translate('uploadedFile')}</th>
        <th id="copy-file-list">${state.translate('copyFileList')}</th>
        <th id="expiry-file-list">${state.translate('expiryFileList')}</th>
        <th id="delete-file-list">${state.translate('deleteFileList')}</th>
        <!-- htmllint tag-bans="$previous" -->
      </tr>
    </thead>
    <tbody>
      ${state.storage.files.map(f => file(f, state, emit))}
    </tbody>
  </table>
  `;
  const list = state.storage.files.length ? table : ''
  const div = html`
  <div id="file-list">
    ${list}
  </div>
  `;
  return div;
};
