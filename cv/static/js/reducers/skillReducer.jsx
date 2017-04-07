import {DEFAULT_ADRESS} from '../actions/action'

const INITIAL_CREDENT_STATE = {skill:[]};
const skillReducer = (state = INITIAL_CREDENT_STATE, action) => {
  switch(action.type){
    case 'DEFAULT_SKILL':
      return { ...state, skill:action.payload};
      break;

    default:
      return state;
  }
};
export default skillReducer;
