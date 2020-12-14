import axios from 'axios'
import authHeader from './auth-header'
import {
  GET_CATEGORIES_API_URL,
  GET_PRODUCTS_API_URL,
  GET_TAGS_API_URL,
  POST_PRODUCT_API_URL,
} from '../constants/api'
export function getProducts() {
  return axios
    .get(GET_PRODUCTS_API_URL, { headers: authHeader() })
    .then((res) => res.data)
}

export function getCategories() {
  return axios
    .get(GET_CATEGORIES_API_URL, { headers: authHeader() })
    .then((res) => res.data)
}

export function getTags() {
  return axios
    .get(GET_TAGS_API_URL, { headers: authHeader() })
    .then((res) => res.data)
}

export function postProduct(data) {
  return axios
    .post(POST_PRODUCT_API_URL, data, { headers: authHeader() })
    .then((res) => res.data)
}
