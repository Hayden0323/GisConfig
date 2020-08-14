const state = () => ({
  companyName: '一张图',
  baseUrl: '58.214.244.98',
  basePort: '8098',
  carUrl: '58.214.244.98',
  carPort: '8098',
})

const mutations = {
  changeCompanyName(state, val) {
    state.companyName = val
  },
  changeBaseUrl(state, val) {
    state.baseUrl = val
  },
  changeBasePort(state, val) {
    state.basePort = val
  },
  changeCarUrl(state, val) {
    state.carUrl = val
  },
  changeCarPort(state, val) {
    state.carPort = val
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
