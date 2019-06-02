import auth from '@/api/auth'
import { resolve } from 'q';

const state = {
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },
  register({ commit }, { username, password }) {
    return auth.register({ username, password })
      .then(
        (res) => {
          commit('setUser', { user: res.data })
          commit('setLogin', { isLogin: true })
          return res;
        }
      )
  },

  logout({ commit }) {
    return auth.logout()
      .then(() => {
        commit('setUser', { user: null })
        commit('setLogin', { isLogin: false })
      })
  },

  async checkLogin({ commit, state}) {
    // Vuex状态为登录
    if(state.isLogin) return true
    // 可能已登录,但是Vuex状态未更新,重新获取一次
    let res = await auth.getInfo()
    // 更新Vuex状态
    commit('setLogin', { isLogin: res.isLogin })
    // 未登录
    if(!res.isLogin) return false
    // 已登录则更新user数据
    commit('setUser', { user: res.data })
    return true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}