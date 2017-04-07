import React from 'react';
import ReactDOM from 'react-dom';
import Credents from './components/credents'
import Education from './components/education'
import MainContainer from './components/MainComponent'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import {} from './reducers/index';
import rootReducer from './reducers/index';
import '../css/index.css'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store =createStore(rootReducer)
const storeWithMiddleware = createStoreWithMiddleware(rootReducer)
  ReactDOM.render(
    <Provider store={storeWithMiddleware}>
      <div>
        <MainContainer/>
      </div>
    </Provider>,


    document.getElementById('root')
  );
