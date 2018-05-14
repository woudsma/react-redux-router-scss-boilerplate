import constants from '../actions/constants'

const initialState = {
  initialized: false,
  counter: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INIT_APP:
      return {
        ...state,
        initialized: true,
      }

    case constants.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case constants.RESET_APP:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
