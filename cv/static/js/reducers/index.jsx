import CREDENTS from '../actions/action'
export const credentreducer = (state = [{credentdata: {}}], action) => {
  switch (action.type) {
    case CREDENTS:
      return [...state, {
          credentdata: {}
        }]
  }
}
