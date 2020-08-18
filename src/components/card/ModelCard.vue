<template>
  <div class="model-card">
    <v-expansion-panel-header>
      {{operationallayer.name}}
      <template v-slot:actions>
        <v-btn icon>
          <v-icon color="error"
                  @click.stop="deleteLayer(operationallayer.id)">clear</v-icon>
        </v-btn>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-list>
          <v-list-item>
            <v-col cols="12">
              <v-text-field label="地图模型地址"
                            @keydown="handleLoadModel"
                            v-model="url"></v-text-field>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-col cols="9">
              <v-checkbox v-model="isProxy"
                          label="需要代理"></v-checkbox>
            </v-col>
            <v-col cols="3">
              <v-btn color="primary"
                     @click.prevent="handleLoadModel"
                     small>加载模型</v-btn>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-col cols="12">
              <v-slider v-model="maximumScreenSpaceError"
                        thumb-label="always"
                        :thumb-size="24"
                        min="1"
                        max="16"
                        label="模型精度"></v-slider>
            </v-col>
          </v-list-item>

          <v-list-item>
            <v-col cols="12">
              <v-slider v-model="offsetZ"
                        thumb-label="always"
                        :thumb-size="24"
                        min="-50"
                        max="100"
                        label="高度偏移值"></v-slider>
            </v-col>
          </v-list-item>
        </v-list>
      </v-card>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { loadModel } from '../../scripts/model-core'

export default {
  props: {
    operationallayer: {
      type: Object
    }
  },
  data: () => ({
    isProxy: false,
  }),
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
    maximumScreenSpaceError: {
      get: function () {
        return this.$store.state.map.operationallayers.find(
          item => item.id === this.operationallayer.id
        ).maximumScreenSpaceError
      },
      set: function (val) {
        this.changeMaxSpaceErr({ id: this.operationallayer.id, val })
      }
    },
    offsetZ: {
      get: function () {
        return this.$store.state.map.operationallayers.find(
          item => item.id === this.operationallayer.id
        ).offset.z
      },
      set: function (val) {
        this.changeOffsetZ({ id: this.operationallayer.id, val })
      }
    }
  },
  methods: {
    ...mapMutations('map', ['changeUrl', 'changeMaxSpaceErr', 'changeOffsetZ', 'deleteLayer']),
    handleLoadModel (e) {
      if (e.key) {
        if (e.key !== 'Enter') return
      }
      loadModel(this.operationallayer.id, this.url, this.maximumScreenSpaceError, this.isProxy)
    }
  }
}
</script>

<style>
</style>