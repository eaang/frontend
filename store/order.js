export const state = () => ({
  order: {},
})

export const mutations = {
  setGiftQuantity(state, giftQuantity) {
    state.order = giftQuantity
  },
  setBgMessage(state, bgMessage) {
    state.order.bg = bgMessage.bg
    state.order.message = bgMessage.message
  },
  setOrder(state, order) {
    state.order = order
  },
}

export const getters = {
  order: (state) => {
    return state.order
  },
}
