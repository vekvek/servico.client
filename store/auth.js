export const state = () => ({
  token: {},
  user: {},
})

export const getters = {
  isLoggedIn(state) {
    return !!state.token.token && !!state.user
  }
}

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },

  SET_USER(state, payload) {
    state.user = payload
  }
}

export const actions = {
  /**
   * Handle save token in vuex and cookies.
   *
   * @param object token
   * @param object user
   */
  save({ commit }, { token, user }) {
    commit('SET_TOKEN', token)
    commit('SET_USER', user)

    this.$cookies.set('token', JSON.stringify(token), {
      path: '/',
      maxAge: token.expires_in,
      httpOnly: true,
    })
  },
}
