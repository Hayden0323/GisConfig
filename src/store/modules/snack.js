const state = () => ({
  isShow: false,
  text: '',
  color: 'error'
})

const mutations = {
  configSnack(state, { isShow, text = '', color = 'error' }) {
    if (isShow) {
      state.text = text
      state.color = color
      state.isShow = isShow
    } else {
      state.isShow = isShow
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
