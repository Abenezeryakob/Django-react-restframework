export const CREDENTS = 'CREDENTS';
import $ from '../jquery.min'

export function addDefaultQuestionResult() {

  const request = $.get('./home/api/credents/');

  return {
    type: ADD_CREDENTS_RESULT,
    payload: request,
    meta: {
      filterID: 0,
      filterName: ''
    }
  }
}
