export const state = () => ({
  gift: {},
  quantity: null,
  bg: null,
  message: '',
})

export const mutations = {
  setGift(state, gift) {
    state.gift = gift
  },
  setQuantity(state, quantity) {
    state.quantity = quantity
  },
  setBg(state, bg) {
    state.bg = bg
  },
  setMessage(state, message) {
    state.order = message
  },
}

export const getters = {
  price: (state) => {
    return state.order.price
  },
}
