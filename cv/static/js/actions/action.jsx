export const ADD_CREDENTS_RESULT = 'ADD_CREDENTS_RESULT';
export const NAVBAR_CLICKED = 'NAVBAR_CLICKED';
import $ from '../jquery.min'

export function defaultdata () {

  const request = $.get('./api/credents/json?format=json');
  return {
    type: ADD_CREDENTS_RESULT,
    payload: request,

  }
}

export function navbarClicked (link) {
  return {
    type: NAVBAR_CLICKED,
    payload: link,

  }
}
