<template>
  <div class="map-model">
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          地图相关
        </v-subheader>
      </v-col>
    </v-row>
    <v-menu v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link
                     v-bind="attrs"
                     v-on="on">
          <v-list-item-action>
            <v-icon>near_me</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              配置地图模型
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <model-card></model-card>
    </v-menu>
    <v-list-item>
      <v-list-item-action>
        <v-icon>crop</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title class="grey--text">
          获取当前视角
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon :color="isPreserved"
                  @click="getCameraView">photo_camera</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider dark
               class="my-4"></v-divider>
  </div>
</template>

<script>
import ModelCard from '../../card/ModelCard'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ModelCard
  },
  computed: {
    ...mapState('map', ['center']),
    isPreserved () {
      return Object.keys(this.center).length === 0 ? 'grey lighten-1' : 'green lighten-1'
    }
  },
  data: () => ({
    menu: false,
  }),
  methods: {
    ...mapActions('map', ['getCameraView'])
  }
}
</script>

<style>
</style>