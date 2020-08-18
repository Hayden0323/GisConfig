import store from '../store/index'

export function getJSON() {
  let result = {}

  const { map, platform, location } = store.state

  const map3d = {
    homeButton: true,
    sceneModePicker: true,
    navigationHelpButton: true,
    infoBox: true,
    vrButton: false,
    fullscreenButton: false,
    geocoder: true,
    baseLayerPicker: true,
    showRenderLoopErrors: true,
    animation: true,
    timeline: true,
    center: map.center,
    minzoom: 1,
    maxzoom: 20000000,
    style: {
      atmosphere: true,
      lighting: false,
      fog: false,
      testTerrain: false,
    },
    contextmenu: true,
    mouseZoom: true,
    location: {
      fps: true,
      format:
        '<div>经度:{x}</div> <div>纬度:{y}</div> <div>海拔：{z}米</div> <div>方向：{heading}度</div> <div>俯仰角：{pitch}度</div>  <div>视高：{height}米</div>',
      crs: '',
    },
    navigation: {
      legend: { left: '100px', bottom: '-1px' },
      compass: { bottom: '240px', right: '2px' },
    },
    terrain: {
      url: 'http://data.marsgis.cn/terrain',
      visible: true,
    },
    basemaps: [
      {
        name: '谷歌卫星',
        icon: 'img/basemaps/google_img.png',
        type: 'www_google',
        crs: 'wgs84',
        layer: 'img_d',
        visible: true,
      },
      {
        name: 'ArcGIS卫星',
        icon: 'img/basemaps/esriWorldImagery.png',
        type: 'arcgis',
        url:
          'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
        enablePickFeatures: false,
      },
      {
        name: '微软卫星',
        icon: 'img/basemaps/bingAerial.png',
        type: 'www_bing',
        layer: 'Aerial',
      },
      {
        name: '天地图卫星',
        icon: 'img/basemaps/tdt_img.png',
        type: 'www_tdt',
        layer: 'img_d',
        key: [
          '313cd4b28ed520472e8b43de00b2de56',
          '83b36ded6b43b9bc81fbf617c40b83b5',
          '0ebd57f93a114d146a954da4ecae1e67',
          '6c99c7793f41fccc4bd595b03711913e',
          '56b81006f361f6406d0e940d2f89a39c',
        ],
      },
      {
        name: '天地图电子',
        icon: 'img/basemaps/tdt_vec.png',
        type: 'group',
        layers: [
          {
            name: '底图',
            type: 'www_tdt',
            layer: 'vec_d',
            key: ['313cd4b28ed520472e8b43de00b2de56'],
          },
          {
            name: '注记',
            type: 'www_tdt',
            layer: 'vec_z',
            key: ['83b36ded6b43b9bc81fbf617c40b83b5'],
          },
        ],
      },
      {
        name: 'OSM地图',
        type: 'xyz',
        icon: 'img/basemaps/osm.png',
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        subdomains: 'abc',
      },
      {
        name: '离线地图  (供参考)',
        type: 'group',
        icon: 'img/basemaps/google_img.png',
        layers: [
          {
            name: '全球',
            type: 'xyz',
            url: 'http://data.marsgis.cn/maptile/wgs3857img/{z}/{x}/{y}.jpg',
            minimumLevel: 0,
            maximumLevel: 9,
          },
          {
            name: '中国',
            type: 'xyz',
            url: 'http://data.marsgis.cn/maptile/wgs3857img/{z}/{x}/{y}.jpg',
            minimumTerrainLevel: 10,
            minimumLevel: 10,
            maximumLevel: 12,
            rectangle: {
              xmin: 69.706929,
              xmax: 136.560941,
              ymin: 15.831038,
              ymax: 52.558005,
            },
          },
          {
            name: '具体项目(如合肥)',
            type: 'xyz',
            url: 'http://data.marsgis.cn/maptile/wgs3857img/{z}/{x}/{y}.jpg',
            minimumTerrainLevel: 12,
            minimumLevel: 12,
            maximumLevel: 18,
            rectangle: {
              xmin: 116.33236,
              xmax: 118.183557,
              ymin: 31.143784,
              ymax: 32.565035,
            },
          },
        ],
      },
      {
        name: '单张图片  (本地离线)',
        icon: 'img/basemaps/offline.png',
        type: 'image',
        url: 'img/tietu/world.jpg',
      },
    ],
    operationallayers: map.operationallayers,
  }

  const platConfig = {
    COMPANY_NAME: platform.companyName,
    PEOPLE_LOCATION: location.peopleLocation,
    LOCATION_ISLY: location.isBlueTooth,
    LYORIGINPOS: location.btOriginal,
    LYANGLE: location.btAngle,
    LYSCALE: location.btScale,
    LOCATION_PARAMS: {
      username: location.username,
      password: location.password,
    },
    CAR_LOCATION: location.carLocation,
    CAR_LOCATION_PARAMS: {
      companynum: location.carAccount,
    },
    ENTITY_MODEL: {
      staff: location.staff,
      car: location.car,
    },
    NORMAL_HEIGHT: location.height,
    TRACK_HEIGHT: location.height,
    CONNECTION_POOL: {
      baseUrl: `http://${platform.baseUrl}:${platform.basePort}/xdkj/rydw`,
      wwyt: `http://${platform.baseUrl}:${platform.basePort}`,
      location: `ws://${platform.baseUrl}:${platform.basePort}/websocket/rydw`,
      carLocation: `http://${platform.carUrl}:${platform.carPort}/czk`,
      wwytAlarm: `ws://${platform.baseUrl}:${platform.basePort}/websocket/bjxx`,
      locationAlarm: `ws://${platform.baseUrl}:${platform.basePort}/websocket/bjxx`,
    },
  }

  result = { map3d: { ...map3d }, platConfig: { ...platConfig } }

  return result
}
