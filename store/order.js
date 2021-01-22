export const state = () => ({
  order: {},
})

export const mutations = {
  setOrder(state, order) {
    state.order = order
  },
}

export const getters = {
  order: (state) => {
    return state.order
  },
  quantity: (state) => {
    return state.order.quantity
  },
  price: (state) => {
    return state.order.gift.price * state.order.quantity
  },
  bg: (state) => {
    return state.order.bg
  },
  message: (state) => {
    return state.order.message
  },
}
