<template>
  <div class="gltf-card">
    <v-expansion-panel-header>
      {{operationallayer.name}}
      <template v-slot:actions>
        <v-btn icon>
          <v-icon color="error"
                  @click.stop="deleteLayer({id: operationallayer.id, type: operationallayer.type})">clear</v-icon>
        </v-btn>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-list>
          <v-list-item>
            <v-col cols="12">
              <v-text-field label="gltf模型地址"
                            v-model="url"></v-text-field>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-col cols="9">
              <v-text-field v-model="scale"
                            label="比例"
                            max="100"
                            min="0.001"
                            step="1"
                            type="number"
                            @keydown="false"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-btn color="primary"
                     @click.prevent="handleLoadModel"
                     small>绘制模型</v-btn>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-col cols="12">
              <v-slider v-model="heading"
                        thumb-label="always"
                        :thumb-size="24"
                        min="0"
                        max="180"
                        label="角度"></v-slider>
            </v-col>
          </v-list-item>
        </v-list>
      </v-card>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { drawGltfModel } from '../../scripts/model-core'

export default {
  props: {
    operationallayer: {
      type: Object
    }
  },
  computed: {
    url: {
      get: function () {
        return this.$store.state.map.operationallayers.find(
          item => item.id === this.operationallayer.id
        ).url
      },
      set: function (val) {
        this.changeUrl({ id: this.operationallayer.id, val })
      }
    },
    scale: {
      get: function () {
        return this.$store.state.map.operationallayers.find(
          item => item.id === this.operationallayer.id
        ).scale
      },
      set: function (val) {
        this.changeScale({ id: this.operationallayer.id, val })
      }
    },
    heading: {
      get: function () {
        return this.$store.state.map.operationallayers.find(
          item => item.id === this.operationallayer.id
        ).position.heading
      },
      set: function (val) {
        this.changePosition({ id: this.operationallayer.id, position: { heading: val } })
      }
    }
  },
  methods: {
    ...mapMutations('map', ['changeUrl', 'changePosition', 'changeScale', 'deleteLayer']),
    handleLoadModel (e) {
      if (e.key) {
        if (e.key !== 'Enter') return
      }

      drawGltfModel(this.operationallayer.id, this.url, this.scale)
    }
  }
}
</script>

<style>
</style>