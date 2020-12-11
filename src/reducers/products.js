import { handleActions } from 'redux-actions'
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAIL,
} from '../constants/types'

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
    [POST_PRODUCT_SUCCESS]: (state, action) => ({ ...state }),
    [POST_PRODUCT_FAIL]: (state, action) => ({ ...state }),
  },
  initialState,
)

export default products
