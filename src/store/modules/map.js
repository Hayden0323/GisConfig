import { changeMaxSpaceErr, changeOffsetZ } from '../../scripts/model-core'

const state = () => ({
  type: '3dtiles',
  name: '',
  url: 'http://58.215.11.2:8098/static/map/baowan/baowan3D/Scene/baowan3D.json',
  maximumScreenSpaceError: 8,
  maximumMemoryUsage: 8192,
  dynamicScreenSpaceError: true,
  cullWithChildrenBounds: true,
  offset: {
    z: 0,
  },
  visible: true,
  center: {},
})

const mutations = {
  changeUrl(state, url) {
    state.url = url
  },
  changeMaxSpaceErr(state, maximumScreenSpaceError) {
    if (typeof maximumScreenSpaceError !== 'number') return
    state.maximumScreenSpaceError = maximumScreenSpaceError
    changeMaxSpaceErr(maximumScreenSpaceError)
  },
  changeOffsetZ(state, offsetZ) {
    if (typeof offsetZ !== 'number') return
    state.offset.z = offsetZ
    changeOffsetZ(offsetZ)
  },
}

const actions = {
  getCameraView({ state, commit }) {
    try {
      state.center = window.$viewer.mars.getCameraView()
      commit(
        'snack/configSnack',
        { isShow: true, color: 'success', text: '保存视角成功' },
        { root: true }
      )
    } catch (error) {
      commit(
        'snack/configSnack',
        { isShow: true, color: 'error', text: '保存视角失败' },
        { root: true }
      )
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
