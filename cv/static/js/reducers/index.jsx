import { combineReducers } from 'redux';
import credentreducer  from './credent'
import navbarReducer from'./navbarReducer'
import adressReducer from'./adressReducer'
const rootReducer = combineReducers({
  results: credentreducer,
  navbar:  navbarReducer,
  adress:  adressReducer,
});

export default rootReducer;
