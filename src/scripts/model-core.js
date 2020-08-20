import store from '../store/index'

let tilesets = {} // 模型对象
let drawControl = null // 绘图控制器

/**
 * 加载模型
 *
 * @param {Number} id 唯一值
 * @param {String} url 模型地址
 * @param {Number} maximumScreenSpaceError 模型精度
 * @param {Boolean} isProxy 是否需要代理
 */
export function loadModel(id, url, maximumScreenSpaceError, isProxy = false) {
  if (tilesets[id]) {
    window.$viewer.scene.primitives.remove(tilesets[id])
  }

  if (isProxy) {
    url = new window.$Cesium.Resource({
      url,
      proxy: new window.$Cesium.DefaultProxy('http://data.marsgis.cn/proxy'),
    })
  }

  tilesets[id] = window.$viewer.scene.primitives.add(
    new window.$Cesium.Cesium3DTileset({
      url,
      maximumScreenSpaceError,
    })
  )

  let tileset = tilesets[id]

  tileset._config = {
    showClickFeature: true,
    clickFeatureColor: '#00FF00',
    popup: 'all',
  }

  tileset.readyPromise
    .then((tileset) => {
      const boundingSphere = tileset.boundingSphere
      window.$viewer.camera.flyToBoundingSphere(
        boundingSphere,
        new window.$Cesium.HeadingPitchRange(
          0.0,
          -0.5,
          boundingSphere.radius * 1.5
        )
      )

      // 记录模型原始的中心点
      tileset.$originalCenter = window.$mars3d.tileset.getCenter(tileset)

      let position = tileset.boundingSphere.center

      // 显示出中心点
      if (tileset.$pointEntity)
        window.$viewer.entities.remove(tileset.$pointEntity)
      tileset.$pointEntity = window.$viewer.entities.add({
        name: '模型中心点',
        position,
        point: {
          color: new window.$Cesium.Color.fromCssColorString('#3388ff'),
          pixelSize: 5,
        },
      })

      // 求地面海拔（异步）
      window.$mars3d.point.getSurfaceTerrainHeight(
        window.$viewer.scene,
        position,
        {
          asyn: true, // 是否异步求准确高度
          calback: (newHeight, cartOld) => {
            if (newHeight == null) return

            let offsetZ = newHeight - tileset.$originalCenter.z
            console.log(
              `地面海拔: ${newHeight.toFixed(2)}, 
              需要偏移: ${offsetZ.toFixed(2)}`
            )
            store.commit('map/changeOffsetZ', { id, val: offsetZ })
          },
        }
      )
    })
    .otherwise((error) => {
      console.log(`加载数据出错: ${error}`)
      store.commit('snack/configSnack', { isShow: true, text: error })
    })
}

/**
 * 改变模型精度
 *
 * @param {Number} id   唯一值
 * @param {Number} val  模型精度
 */
export function changeMaxSpaceErr(id, val) {
  const tileset = tilesets[id]
  if (tileset !== undefined && typeof val == 'number') {
    tileset.maximumScreenSpaceError = val
  }
}

/**
 * 改变模型高度偏移量
 *
 * @param {Number} id   唯一值
 * @param {Number} val  高度偏移量
 */
export function changeOffsetZ(id, val) {
  const tileset = tilesets[id]
  if (tileset !== undefined && typeof val == 'number') {
    tileset.$originalCenter.z = val

    window.$mars3d.tileset.updateMatrix(tileset, tileset.$originalCenter)
  }
}

/**
 * 删除指定的图层
 *
 * @param {Number} id  唯一值
 * @param {String} type 类型
 */
export function deleteTileset(id, type) {
  const tileset = tilesets[id]

  if (tileset !== undefined && typeof id == 'number') {
    switch (type) {
      case '3dtiles':
        window.$viewer.scene.primitives.remove(tilesets[id])
        delete tilesets[id]
        break
      case 'gltf':
        drawControl.deleteEntity(tilesets[id])
        delete tilesets[id]
        break
    }
  }
}

/**
 * 绘制gltf模型
 *
 * @param {Number} id   唯一值
 * @param {String} url  模型地址
 * @param {Number} scale  比例
 */
export function drawGltfModel(id, url, scale) {
  if (!drawControl) {
    createAndInitDrawControl(window.$viewer)
    drawControl.on(window.$mars3d.draw.event.EditMovePoint, (e) => {
      store.commit('map/changePosition', {
        id,
        position: window.$mars3d.point.formatPosition(
          drawControl.getPositions(e.entity)[0]
        ),
      })
    })
  }

  if (tilesets[id]) {
    drawControl.deleteEntity(tilesets[id])
    delete tilesets[id]
  }

  drawControl.startDraw({
    type: 'model',
    style: {
      scale: scale || 1,
      modelUrl: url,
    },
    success: function(entity) {
      store.commit('map/changePosition', {
        id,
        position: window.$mars3d.point.formatPosition(
          drawControl.getPositions(entity)[0]
        ),
      })

      tilesets[id] = entity
    },
  })

  // const point = window.$mars3d.point.getCenter(window.$viewer)

  // createModel(
  //   {
  //     url,
  //     scale,
  //     x: point.x,
  //     y: point.y,
  //     z: point.z,
  //   },
  //   window.$viewer
  // )
}

/**
 * 更新gltf模型
 *
 * @param {Number} id   唯一值
 * @param {Object} style 样式
 */
export function updateGltfModel(id, style) {
  const tileset = tilesets[id]

  if (tileset !== undefined) {
    const attr = tileset.attribute

    Object.assign(attr.style, style)
    drawControl.updateAttribute(attr, tileset)
  }
}

/**
 * 创建并初始化drawcontrol
 *
 * @param {Object} viewer  视图
 */
function createAndInitDrawControl(viewer) {
  if (drawControl) return

  drawControl = new window.$mars3d.Draw(viewer, {})
}

/**
 * primitive方式创建模型
 *
 * @param {Object} cfg     参数配置
 * @param {Object} viewer  视图
 */
function createModel(cfg, viewer) {
  const Cesium = window.$Cesium

  const position = Cesium.Cartesian3.fromDegrees(cfg.x, cfg.y, cfg.z || 0)
  const hpRoll = new Cesium.HeadingPitchRoll(
    Cesium.Math.toRadians(cfg.heading || 0),
    Cesium.Math.toRadians(cfg.pitch || 0),
    Cesium.Math.toRadians(cfg.roll || 0)
  )

  const converter = cfg.converter || Cesium.Transforms.eastNorthUpToFixedFrame
  const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
    position,
    hpRoll,
    Cesium.Ellipsoid.WGS84,
    converter
  )

  if (cfg.scale)
    Cesium.Matrix4.multiplyByUniformScale(modelMatrix, cfg.scale, modelMatrix)

  const modelPrimitive = viewer.scene.primitives.add(
    Cesium.Model.fromGltf({
      url: cfg.url,
      modelMatrix,
      minimumPixelSize: cfg.minimumPixelSize || 30,
    })
  )

  modelPrimitive.readyPromise
    .then(function(model) {
      console.log(model)
    })
    .otherwise(function(error) {
      console.log(error)
      store.commit('snack/configSnack', { isShow: true, text: error })
    })
}
