export const state = () => ({
  token: null,
  user: {},
})

export const getters = {
  isLoggedIn: state => !!state.token && !!state.user,
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
   * @param object payload
   */
  save({ commit }, payload) {
    let { token, user } = payload
    commit('SET_TOKEN', token)
    commit('SET_USER', user)

    this.$cookies.set('token', token.token, {
      path: '/',
      maxAge: token.expires_in,
    })
  },

  /**
   * Send attempt request.
   *
   * @return string token
   */
  async attempt({ commit }, token) {
    commit('SET_TOKEN', token)

    try {
      let response = await this.$axios.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      commit('SET_USER', response.data)
    } catch (err) {
      // If request failed, delete token and user
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
    }
  },
}
