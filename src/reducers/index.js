import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
import products from './products'

const rootReducer = combineReducers({
  auth,
  message,
  products,
})

export default rootReducer
