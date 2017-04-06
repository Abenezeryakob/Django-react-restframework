import { combineReducers } from 'redux';
import credentreducer  from './credent'
import navbarReducer from'./navbarReducer'
const rootReducer = combineReducers({
  results: credentreducer,
  navbar:  navbarReducer,
});

export default rootReducer;
