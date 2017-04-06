export const ADD_CREDENTS_RESULT = 'ADD_CREDENTS_RESULT';
export const NAVBAR_CLICKED = 'NAVBAR_CLICKED';
export const DEFAULT_ADRESS = 'DEFAULT_ADRESS';
import $ from '../jquery.min'

export function defaultdata () {

  const request = $.get('./api/credents/json?format=json');
  return {
    type: ADD_CREDENTS_RESULT,
    payload: request,

  }
}

export function navbarClicked (link_number) {
  return {
    type: NAVBAR_CLICKED,
    payload: link_number,

  }
}
export function getDefaultAdress () {
  return {
    type: DEFAULT_ADRESS,
    payload: $.get('./api/adress/json?format=json'),

  }
}
