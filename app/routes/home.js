const welcome = require('../templates/welcome');
const upload = require('../templates/upload');
const share = require('../templates/share');

module.exports = function(state, emit) {
  switch (state.panel) {
    case 'upload':
      return upload(state, emit);
    case 'share':
      return share(state, emit);
  }
  state.panel = 'welcome';
  return welcome(state, emit);
};
