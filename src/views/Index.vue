<template>
  <v-app id="keep">
    <v-app-bar app
               clipped-left
               color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4 blue--text">style</v-icon>
      <span class="title mr-12">Gis&nbsp;<span class="font-weight-light">Keep</span></span>
      <v-row align="center"
             style="max-width: 30vw">
        <v-text-field filled
                      rounded
                      dense
                      single-line
                      hide-details
                      label="Search"
                      prepend-inner-icon="search"></v-text-field>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer"
                         app
                         clipped
                         color="grey lighten-4">
      <v-list dense
              class="grey lighten-4">
        <map-drawer></map-drawer>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid
                   class="grey lighten-4 fill-height">
        <v-row justify="center"
               align="center">
          <v-col cols="12">
            <div class="mapcontainer">
              <Map :url="configUrl"
                   @onload="onMapload" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import Map from "mars-map/Main.vue"
import MapDrawer from '../components/drawer/map/MapDrawer'
import * as Cesium from 'cesium/Cesium'
import mars3d from '../components/mars-map/mars3d/mars3d'

import axios from 'axios';


export default {
  name: "Index",

  components: {
    Map,
    MapDrawer
  },

  data: () => ({
    drawer: null,
    configUrl: "config/config.json"
  }),
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
