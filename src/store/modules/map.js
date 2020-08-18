import {
  changeMaxSpaceErr,
  changeOffsetZ,
  deleteTileset,
} from '../../scripts/model-core'

const state = () => ({
  uid: 0,
  center: {},
  operationallayers: [],
})

const mutations = {
  changeUrl(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find((layer) => id === layer.id)

    layer.url = val
    state.operationallayers = copyLayers
  },
  changeMaxSpaceErr(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find((layer) => id === layer.id)

    layer.maximumScreenSpaceError = val
    state.operationallayers = copyLayers
    changeMaxSpaceErr(id, val)
  },
  changeOffsetZ(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find((layer) => id === layer.id)

    layer.offset.z = val
    state.operationallayers = copyLayers
    changeOffsetZ(id, val)
  },
  addLayer(state, type) {
    state.uid++
    const layer = {
      id: state.uid,
      type: type,
      name: `模型 ${state.uid}`,
      url: '',
      maximumScreenSpaceError: 4,
      maximumMemoryUsage: 8192,
      dynamicScreenSpaceError: true,
      cullWithChildrenBounds: true,
      offset: {
        z: 0,
      },
      visible: true,
    }

    state.operationallayers = [layer, ...state.operationallayers]
  },
  deleteLayer(state, id) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find((layer) => id === layer.id)
    const index = copyLayers.indexOf(layer)

    state.operationallayers.splice(index, 1)
    deleteTileset(id)
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
