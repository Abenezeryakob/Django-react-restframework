import { combineReducers } from 'redux';
import credentreducer  from './credent'
import navbarReducer from'./navbarReducer'
import adressReducer from'./adressReducer'
import skillReducer from './skillReducer'
import educationReducer from './educationReducer'
const rootReducer = combineReducers({
  results: credentreducer,
  navbar:  navbarReducer,
  adress:  adressReducer,
  skills: skillReducer,
  education:educationReducer
});

export default rootReducer;
