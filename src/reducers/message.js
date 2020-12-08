import { handleActions } from 'redux-actions'

import { SET_MESSAGE, CLEAR_MESSAGE } from '../constants/types'
const initialState = {}
const message = handleActions(
  {
    [SET_MESSAGE]: (state, action) => ({ ...state, message: action.payload }),
    [CLEAR_MESSAGE]: (state, action) => ({ ...state, message: '' }),
  },
  initialState,
)

export default message
