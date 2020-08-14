const state = () => ({
  // 人员相关
  peopleLocation: false,
  isBlueTooth: false,
  btOriginal: [0, 0],
  btAngle: 0,
  btScale: 1,
  username: '',
  password: '',
  staff: {
    url: 'http://122.112.193.102:8090/map/xiaofangyuan-run.gltf',
    scale: 3,
  },
  height: 0,
  // 车辆相关
  carLocation: false,
  carAccount: '',
  car: {
    url: 'http://122.112.193.102:8090/map/qiche.gltf',
    scale: 0.1,
  },
})

const mutations = {
  togglePeopleLocation(state) {
    state.peopleLocation = !state.peopleLocation
  },
  toggleBlueTooth(state) {
    state.isBlueTooth = !state.isBlueTooth
  },
  changebtOriginal(state, { lng, lat }) {
    if (lng == undefined) lng = state.btOriginal[0]
    if (lat == undefined) lat = state.btOriginal[1]
    state.btOriginal = [Number(lng), Number(lat)]
  },
  changebtAngle(state, val) {
    state.btAngle = Number(val)
  },
  changebtScale(state, val) {
    state.btScale = Number(val)
  },
  changeUsername(state, val) {
    state.username = val
  },
  changePassword(state, val) {
    state.password = val
  },
  changeStaff(state, { url, scale }) {
    if (url == undefined) url = state.staff.url
    if (scale == undefined) scale = state.staff.scale
    state.staff = { url, scale }
  },
  changeHeight(state, val) {
    state.height = Number(val)
  },
  toggleCarLocation(state) {
    state.carLocation = !state.carLocation
  },
  changeCarAccount(state, val) {
    state.carAccount = val
  },
  changeCar(state, { url, scale }) {
    if (url == undefined) url = state.car.url
    if (scale == undefined) scale = state.car.scale
    state.car = { url, scale }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
