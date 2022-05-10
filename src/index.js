import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Route from './router/';
import store from '@/store/store';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);
