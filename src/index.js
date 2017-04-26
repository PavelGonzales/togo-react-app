import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import preview from './images/preview.jpg';
import App from './components/App'

const initialState = [
  {
    poster: preview,
  }
];

function cinemalist(state = initialState, action) {
  if (action.type === 'NEXT_CINEMA') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(cinemalist);

ReactDOM.render(
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
);
