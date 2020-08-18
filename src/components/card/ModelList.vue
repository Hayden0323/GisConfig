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
          <v-expansion-panel v-for="operationallayer in operationallayers"
                             :key="operationallayer.id">
            <model-card :operationallayer="operationallayer"></model-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expand-transition>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>GLTF</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="primary">add_circle</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import ModelCard from '../card/ModelCard'

export default {
  components: {
    ModelCard
  },
  data: () => ({
    tileShow: true,
  }),
  computed: {
    ...mapState('map', ['operationallayers'])
  },
  methods: {
    ...mapMutations('map', ['addLayer'])
  }
}
</script>

<style>
</style>