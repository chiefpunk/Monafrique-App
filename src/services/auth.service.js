import axios from 'axios'
import { LOGIN_API_URL } from '../constants/api'
export const login = (username, password) => {
  return axios.post(LOGIN_API_URL, { username, password }).then((response) => {
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data.data))
    }
    return response.data.data
  })
}

export const logout = () => {
  localStorage.removeItem('user')
}
