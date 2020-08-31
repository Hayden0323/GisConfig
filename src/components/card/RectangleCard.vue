<template>
  <div class="rectangle-card">
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
              <v-text-field label="图片地址"
                            v-model="url"></v-text-field>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-col cols="9">
              <v-slider v-model="rotation"
                        thumb-label="always"
                        :thumb-size="24"
                        min="0"
                        max="360"
                        label="角度"></v-slider>
            </v-col>
            <v-col cols="3">
              <v-btn color="primary"
                     @click.prevent="handleLoadModel"
                     small>绘制图片</v-btn>
            </v-col>
          </v-list-item>
        </v-list>
      </v-card>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { drawRectangle } from '../../scripts/model-core'

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
    rotation: {
      get: function () {
        return this.$store.state.map.operationallayers.find(
          item => item.id === this.operationallayer.id
        ).rotation
      },
      set: function (val) {
        this.changeRotation({ id: this.operationallayer.id, val })
      }
    }
  },
  methods: {
    ...mapMutations('map', ['changeUrl', 'changeRotation', 'deleteLayer']),
    handleLoadModel (e) {
      if (e.key) {
        if (e.key !== 'Enter') return
      }

      drawRectangle(this.operationallayer.id, this.url, this.rotation)
    }
  }
}
</script>

<style>
</style>