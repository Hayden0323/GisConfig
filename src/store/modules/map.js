import {
  changeMaxSpaceErr,
  changeOffsetZ,
  deleteTileset,
  updateGltfModel,
  changeRotation
} from '../../scripts/model-core'

const state = () => ({
  uid: 0,
  center: {},
  operationallayers: []
})

const mutations = {
  changeUrl(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    layer.url = val
    state.operationallayers = copyLayers
  },
  changeRotation(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    layer.rotation = val
    layer.stRotation = val
    state.operationallayers = copyLayers
    changeRotation(id, val)
  },
  changeCoordinates(state, { id, coordinates }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    layer.coordinates = coordinates
    state.operationallayers = copyLayers
  },
  changeMaxSpaceErr(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    layer.maximumScreenSpaceError = val
    state.operationallayers = copyLayers
    changeMaxSpaceErr(id, val)
  },
  changeOffsetZ(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    layer.offset.z = val
    state.operationallayers = copyLayers
    changeOffsetZ(id, val)
  },
  changePosition(state, { id, position }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    Object.assign(layer.position, position)
    state.operationallayers = copyLayers
    updateGltfModel(id, position)
  },
  changeScale(state, { id, val }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id === layer.id)

    layer.scale = Number(val)
    state.operationallayers = copyLayers

    updateGltfModel(id, { scale: val })
  },
  addLayer(state, type) {
    let layer
    state.uid++
    switch (type) {
      case '3dtiles':
        layer = {
          id: state.uid,
          type: type,
          name: `模型-${state.uid}`,
          url: '',
          maximumScreenSpaceError: 4,
          maximumMemoryUsage: 8192,
          dynamicScreenSpaceError: true,
          cullWithChildrenBounds: true,
          offset: {
            z: 0
          },
          visible: true
        }
        break
      case 'gltf':
        layer = {
          id: state.uid,
          type: type,
          name: `模型-${state.uid}`,
          url: '',
          scale: 1,
          position: {
            x: 0,
            y: 0,
            z: 0,
            heading: 0
          }
        }
        break
      case 'rectangle':
        layer = {
          id: state.uid,
          type: type,
          name: `模型-${state.uid}`,
          url: '',
          rotation: 0,
          stRotation: 0,
          coordinates: [],
          clampToGround: true
        }
        break
    }

    state.operationallayers = [layer, ...state.operationallayers]
  },
  deleteLayer(state, { id, type }) {
    const copyLayers = [...state.operationallayers]
    const layer = copyLayers.find(layer => id == layer.id && type == layer.type)
    const index = copyLayers.indexOf(layer)

    state.operationallayers.splice(index, 1)
    deleteTileset(id, type)
  }
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
