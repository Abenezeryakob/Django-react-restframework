import {DEFAULT_ADRESS} from '../actions/action'

const INITIAL_CREDENT_STATE = {adress:[]};
const adressReducer = (state = INITIAL_CREDENT_STATE, action) => {
  switch(action.type){
    case 'DEFAULT_ADRESS':
      return { ...state, adress:action.payload};
      break;

    default:
      return state;
  }
};
export default adressReducer;
