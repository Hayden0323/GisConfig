<template>
  <div id="centerDiv"
       class="mapcontainer">
    <Map :url="configUrl"
         @onload="onMapload" />
  </div>
</template>

<script>
import Map from "mars-map/Main.vue";
import * as Cesium from 'cesium/Cesium';
import mars3d from '../components/mars-map/mars3d/mars3d';

import axios from 'axios';


export default {
  name: "Index",

  components: {
    Map
  },

  data () {
    return {
      configUrl: "config/config.json"
    };
  },

  methods: {
    //地图构造完成回调
    onMapload (viewer) {

    },
  }
};
</script>

<style lang="less">
.mapcontainer {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
