/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import constants from './constants'

export const initApp = () => (dispatch, getState) => {
  dispatch({ type: constants.INIT_APP })
}

export const resetApp = () => (dispatch, getState) => {
  dispatch({ type: constants.RESET_APP })
  dispatch(push('/'))
}

export const incrementCounter = () => (dispatch, getState) => {
  dispatch({ type: constants.INCREMENT_COUNTER })
}

export const toggleTransitions = () => (dispatch, getState) => {
  dispatch({ type: constants.TOGGLE_TRANSITIONS })
}
