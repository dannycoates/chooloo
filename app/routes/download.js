const preview = require('../templates/preview');
const download = require('../templates/download');
const completed = require('../templates/completed');

module.exports = function(state, emit) {
  switch (state.ui.panel) {
    case 'download':
      return download(state, emit);
    case 'completed':
      return completed(state, emit);
  }
  state.ui.panel = 'preview';
  return preview(state, emit);
};
