import {ADD_CREDENTS_RESULT} from '../actions/action'


const INITIAL_CREDENT_STATE = {skill:true, work:false, education:false, about:false};

const navbarReducer = (state = INITIAL_CREDENT_STATE, action) => {
  switch(action.type){
    case 'NAVBAR_CLICKED':
      if (action.payload==1){
        return { ...state, skill:true, work:true, education:false, about:false};
      }
      else if (action.payload==2){
        return { ...state, skill:false, work:true, education:false, about:false};
      }
      else if(action.payload==3){
         return { ...state, skill:false, work:false, education:true, about:false};
      }
      else if(action.payload==4){
         return { ...state, skill:false, work:false, education:false, about:true};
      }
      break;
    default:
      return state;
  }
};
export default navbarReducer;
