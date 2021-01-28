import React from 'react';
import { Provider } from 'react-redux';
import MySpin from './container/MySpin';
import PageRouter from './router/PageRouter';
import store from './store';
import backgroundImg from './static/bg.jpg'
const homeImg = {
  backgroundSize: '100% 100%', //记得这里100%
  background: `url(${backgroundImg})`,
  zIndex: 999,
  position:'left bottom'
}
export default () => {
  return (
    <Provider store={store}>
      <div style={homeImg}>
        <MySpin PageRouter={PageRouter} />
      </div>


    </Provider>
  )
}