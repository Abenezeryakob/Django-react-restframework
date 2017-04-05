import {ADD_CREDENTS_RESULT} from '../actions/action'
import * as jquery2 from '../jquery.min';
import $  from '../jquery.min'
import fetch from 'isomorphic-fetch'

const INITIAL_CREDENT_STATE = {creds:[]};
console.log('INITIAL_CREDENT_STATE');
console.log(INITIAL_CREDENT_STATE);
console.log('INITIAL_CREDENT_STATE' );

const credentreducer = (state = INITIAL_CREDENT_STATE, action) => {
  switch(action.type){
    case 'ADD_CREDENTS_RESULT':
      return { ...state, creds:action.payload};
      break;

    case 'ADD_EDJUCATION_RESULT':
      return '';

    default:
      return state;
  }
};
export default credentreducer;
