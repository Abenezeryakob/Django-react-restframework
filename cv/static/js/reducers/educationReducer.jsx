import {DEFAULT_EDUCATION} from '../actions/action'

const INITIAL_CREDENT_STATE = {education:[]};
const educationReducer = (state = INITIAL_CREDENT_STATE, action) => {
  switch(action.type){
    case 'DEFAULT_EDUCATION':
      return { ...state, education:action.payload};
      break;

    default:
      return state;
  }
};
export default educationReducer;
