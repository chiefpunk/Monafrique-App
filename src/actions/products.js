import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  SET_MESSAGE,
} from '../constants/types'
import * as ProductService from '../services/products.service'

export const getProducts = () => (dispatch) => {
  return ProductService.getProducts().then(
    (data) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { data },
      })
      console.log(data)
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log(message)

      dispatch({
        type: GET_PRODUCTS_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    },
  )
}

export const getOders = () => (dispatch) => {
  return ProductService.getOrders().then(
    (data) => {
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: { data },
      })
      console.log(data)
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log(message)

      dispatch({
        type: GET_ORDERS_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    },
  )
}
