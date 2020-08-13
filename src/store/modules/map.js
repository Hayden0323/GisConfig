import { changeMaxSpaceErr, changeOffsetZ } from '../../scripts/model-core'

const state = () => ({
  type: '3dtiles',
  name: '',
  url:
    'http://192.168.0.144:8098/static/map/baowan/baowan3D/Scene/baowan3D.json',
  maximumScreenSpaceError: 8,
  maximumMemoryUsage: 8192,
  dynamicScreenSpaceError: true,
  cullWithChildrenBounds: true,
  offset: {
    z: 0,
  },
  visible: true,
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

export default {
  namespaced: true,
  state,
  mutations,
}
