import ADD_CREDENTS_RESULT from '../actions/action'
const credentreducer = (state = [{credentdata: {}}], action) => {
  switch (action.type) {
    case ADD_CREDENTS_RESULT:
      return [...state, {
          credentdata: action.payload
        }]
    default:
      return state
  }
}

export default credentreducer
