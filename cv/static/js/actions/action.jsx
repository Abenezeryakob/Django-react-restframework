export const ADD_CREDENTS_RESULT = 'ADD_CREDENTS_RESULT';
import $ from '../jquery.min'

export function defaultdata () {

  const request = $.get('./api/credents/json?format=json');
  return {
    type: ADD_CREDENTS_RESULT,
    payload: request,

  }
}
