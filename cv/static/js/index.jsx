import React from 'react';
import ReactDOM from 'react-dom';
import Credents from './components/credents'
import Education from './components/education'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import credentreducer from './reducers/index';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(credentreducer)}>
      <div>
        <Credents/>
        <Education/>
      </div>
    </Provider>,


    document.getElementById('root')
  );
