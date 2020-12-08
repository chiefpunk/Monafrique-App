import { handleActions } from 'redux-actions'
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
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
    [GET_ORDERS_SUCCESS]: (state, action) => ({
      ...state,
      orders: action.payload.data,
    }),
    [GET_ORDERS_FAIL]: (state, action) => ({
      ...state,
      orders: null,
    }),
  },
  initialState,
)

export default products
