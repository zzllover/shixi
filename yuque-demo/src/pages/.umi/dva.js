import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'cards', ...(require('/Users/mi/Desktop/shixi/yuque-demo/src/models/cards.js').default) });
app.model({ namespace: 'model', ...(require('/Users/mi/Desktop/shixi/yuque-demo/src/pages/DVA/Card-5/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/mi/Desktop/shixi/yuque-demo/src/pages/List/List-1/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/mi/Desktop/shixi/yuque-demo/src/pages/List/List-2/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
