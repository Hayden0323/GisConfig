<template>
  <div class="model-list white"
       style="width: 470px">
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="tileShow = !tileShow"></v-app-bar-nav-icon>
      <v-toolbar-title>3DTiles</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="primary"
                @click.stop="addLayer('3dtiles')">add_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-expand-transition>
      <v-row justify="center"
             v-show="tileShow">
        <v-expansion-panels accordion
                            hover>
          <v-expansion-panel v-for="operationallayer in tilesetLayers"
                             :key="operationallayer.id">
            <model-card :operationallayer="operationallayer"></model-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expand-transition>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="gltfShow = !gltfShow"></v-app-bar-nav-icon>
      <v-toolbar-title>GLTF</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="primary"
                @click.stop="addLayer('gltf')">add_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-expand-transition>
      <v-row justify="center"
             v-show="gltfShow">
        <v-expansion-panels accordion
                            hover>
          <v-expansion-panel v-for="operationallayer in gltfLayers"
                             :key="operationallayer.id">
            <gltf-card :operationallayer="operationallayer"></gltf-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expand-transition>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="rectangleShow = !rectangleShow"></v-app-bar-nav-icon>
      <v-toolbar-title>Image</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="primary"
                @click.stop="addLayer('rectangle')">add_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-expand-transition>
      <v-row justify="center"
             v-show="rectangleShow">
        <v-expansion-panels accordion
                            hover>
          <v-expansion-panel v-for="operationallayer in rectangleLayers"
                             :key="operationallayer.id">
            <rectangle-card :operationallayer="operationallayer"></rectangle-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expand-transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import ModelCard from '../card/ModelCard'
import GltfCard from '../card/GltfCard'
import RectangleCard from '../card/RectangleCard'

export default {
  components: {
    ModelCard,
    GltfCard,
    RectangleCard
  },
  data: () => ({
    tileShow: true,
    gltfShow: true,
    rectangleShow: true
  }),
  computed: {
    ...mapState('map', ['operationallayers']),
    tilesetLayers: function () {
      return this.operationallayers.filter(
        layer => layer.type === '3dtiles'
      )
    },
    gltfLayers: function () {
      return this.operationallayers.filter(
        layer => layer.type === 'gltf'
      )
    },
    rectangleLayers: function () {
      return this.operationallayers.filter(
        layer => layer.type === 'rectangle'
      )
    }
  },
  methods: {
    ...mapMutations('map', ['addLayer'])
  }
}
</script>

<style>
</style>