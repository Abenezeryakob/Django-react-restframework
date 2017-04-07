import { combineReducers } from 'redux';
import credentreducer  from './credent'
import navbarReducer from'./navbarReducer'
import adressReducer from'./adressReducer'
import skillReducer from './skillReducer'
const rootReducer = combineReducers({
  results: credentreducer,
  navbar:  navbarReducer,
  adress:  adressReducer,
  skills: skillReducer
});

export default rootReducer;
