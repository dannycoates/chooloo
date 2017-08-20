const html = require('choo/html')
const assets = require('../assets')

function timeLeft(milliseconds) {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const seconds = Math.floor(milliseconds / 1000 % 60);
  if (hours >= 1) {
    return `${hours}h ${minutes % 60}m`;
  } else if (hours === 0) {
    return `${minutes}m ${seconds}s`;
  }
  return 'Expired';
}

module.exports = function (file, state, emit) {
  const url = `${file.url}#${file.secretKey}`;
  const future = new Date();
  future.setTime(file.creationDate.getTime() + file.expiry);
  const countdown = future.getTime() - Date.now();

  const row = html`
  <tr>
    <td>${file.name}</td>
    <td>
      <span class="icon-docs">${state.translate('copyUrlHover')}</span>
      <img onclick=${copyClick} src="${assets.get('copy-16.svg')}" class="icon-copy" title="${state.translate('copyUrlHover')}">
      <span class="text-copied" hidden="true">${state.translate('copiedUrl')}</span>
    </td>
    <td>${timeLeft(countdown)}</td>
    <td>
      <span class="icon-cancel-1" title="${state.translate('deleteButtonHover')}">${state.translate('deleteButtonHover')}</span>
      <img onclick=${showPopup} src="${assets.get('close-16.svg')}" class="icon-delete" title="${state.translate('deleteButtonHover')}">
      <div class="popup">
        <div class="popuptext" onclick=${stopProp} onblur=${cancel} tabindex="-1">
          <div class="popup-message">${state.translate('deletePopupText')}</div>
          <div class="popup-action">
            <span class="popup-no" onclick=${cancel}>${state.translate('deletePopupCancel')}</span>
            <span class="popup-yes" onclick=${deleteFile}>${state.translate('deletePopupYes')}</span>
          </div>
        </div>
      </div>
    </td>
  </tr>
  `;

  function copyClick(e) {
    emit('copy', url);
    const icon = e.target;
    const text = e.target.nextSibling;
    icon.hidden = true;
    text.hidden = false;
    setTimeout(() => {
      icon.hidden = false;
      text.hidden = true;
    }, 500);
  }

  function showPopup(e) {
    const popup = row.querySelector('.popuptext');
    popup.classList.add('show');
    popup.focus();
  }

  function stopProp(e) {
    e.stopPropagation();
  }

  function cancel(e) {
    e.stopPropagation();
    const popup = row.querySelector('.popuptext');
    popup.classList.remove('show');
  }

  function deleteFile(e) {
    emit('delete', file)
  }

  return row;
}
