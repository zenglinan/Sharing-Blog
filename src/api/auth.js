import request from '../helper/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  IF_LOGIN: '/auth',
  GET_INFO: '/auth',
  LOGOUT: '/auth/logout'
}

export default {
  register({ username, password }) {
    return request(URL.REGISTER, 'POST', { username, password })
  },
  login({ username, password }) {
    return request(URL.LOGIN, 'POST', { username, password })
  },
  ifLogin(){
    return request(URL.IF_LOGIN, 'GET')
  },
  logout(){
    return request(URL.LOGOUT, 'GET')
  },
  getInfo(){
    return request(URL.GET_INFO, 'GET')
  }
}