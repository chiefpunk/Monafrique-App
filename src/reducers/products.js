import { handleActions } from 'redux-actions'
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants/types'

const initialState = {}
const products = handleActions(
  {
    [GET_PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      products: action.payload.data,
    }),
    [GET_PRODUCTS_FAIL]: (state, action) => ({
      ...state,
      products: null,
    }),
  },
  initialState,
)

export default products
