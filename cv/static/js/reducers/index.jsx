import { combineReducers } from 'redux';
import credentreducer  from './credent'
const rootReducer = combineReducers({
  results: credentreducer,
});

export default rootReducer;
