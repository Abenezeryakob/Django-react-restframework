import {ADD_CREDENTS_RESULT} from '../actions/action'

const INITIAL_CREDENT_STATE = {creds:[]};
const credentreducer = (state = INITIAL_CREDENT_STATE, action) => {
  switch(action.type){
    case 'ADD_CREDENTS_RESULT':
      return { ...state, creds:action.payload};
      break;

    default:
      return state;
  }
};
export default credentreducer;
