import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import './index.css';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
