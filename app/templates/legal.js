const html = require('choo/html')

function replaceLinks(str, urls) {
  let i = -1
  const s = str.replace(/<a>([^<]+)<\/a>/g, (m, v) => {
    i++
    return `<a href="${urls[i]}">${v}</a>`
  })
  return [`<div class="description">${s}</div>`]
}

module.exports = function (state, emit) {
  const div = html`
    <div id="page-one">
      <div id="legal">
        <div class="title">${state.translate('legalHeader')}</div>
          ${html(
            replaceLinks(
              state.translate('legalNoticeTestPilot'),
              [
                "https://testpilot.firefox.com/terms",
                "https://testpilot.firefox.com/privacy",
                "https://testpilot.firefox.com/experiments/send"
              ]
            )
          )}
          ${html(
            replaceLinks(
              state.translate('legalNoticeMozilla'),
              [
                "https://www.mozilla.org/privacy/websites/",
                "https://www.mozilla.org/about/legal/terms/mozilla/"
              ]
            )
          )}
      </div>
    </div>
  `

  if (state.layout) {
    return state.layout(state, div)
  }
  return div
}
