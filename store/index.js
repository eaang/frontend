export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const state = () => ({
  quantity: 1,
})

export const mutations = {
  setQuantity(state, n) {
    state.quantity = n
  },
}
