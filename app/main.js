import app from './routes';
import log from 'choo-log';
import locale from '../common/locales';
import FileReceiver from './fileReceiver';
import fileManager from './fileManager';
import dragManager from './dragManager';
import { canHasSend } from './utils';
import assets from '../common/assets';
import storage from './storage'

app.use(log());

app.use((state, emitter) => {
  // init state
  state.ui = {};
  state.transfer = null;
  state.fileInfo = null;
  state.translate = locale.getTranslator();
  state.storage = storage;
  emitter.on('DOMContentLoaded', async () => {
    const ok = await canHasSend(assets.get('cryptofill.js'));
    if (!ok) {
      const reason = /firefox/i.test(navigator.userAgent) ? 'outdated' : 'gcm';
      emitter.emit('replaceState', `/unsupported/${reason}`);
    }
  });
});

app.use(fileManager);
app.use(dragManager);

app.mount('#page-one');
