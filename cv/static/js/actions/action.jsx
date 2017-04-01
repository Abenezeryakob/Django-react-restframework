export const ADD_CREDENTS_RESULT = 'ADD_CREDENTS_RESULT';
import $ from '../jquery.min'

export default function defaultdata () {

  const request = $.get('./api/credents/');
  console.log(request )
  console.log('------------------------------')

  return {
    type: ADD_CREDENTS_RESULT,
    payload: request,

  }
}
