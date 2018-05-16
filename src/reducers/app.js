import constants from '../actions/constants'

const initialState = {
  initialized: false,
  transitions: true,
  counter: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INIT_APP:
      return {
        ...state,
        initialized: true,
      }

    case constants.RESET_APP:
      return {
        ...initialState,
        transitions: false,
      }

    case constants.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case constants.TOGGLE_TRANSITIONS:
      return {
        ...state,
        transitions: !state.transitions,
      }

    default:
      return state
  }
}
