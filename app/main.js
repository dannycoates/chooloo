import app from './routes';
import log from 'choo-log';
import locale from '../common/locales';
import FileReceiver from './fileReceiver';
import fileManager from './fileManager';
import dragManager from './dragManager';
import { canHasSend } from './utils';

app.use(log());

app.use((state, emitter) => {
  // init state
  state.translate = locale.getTranslator();
  state.files = [];
  emitter.on('DOMContentLoaded', async () => {
    const ok = await canHasSend();
    if (!ok) {
      const reason = /firefox/i.test(navigator.userAgent) ? 'outdated' : 'gcm';
      emitter.emit('replaceState', `/unsupported/${reason}`);
    }
  });
});

app.use(fileManager);
app.use(dragManager);

app.mount('#page-one');
