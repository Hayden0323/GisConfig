<template>
  <v-card>
    <v-list fluid>
      <v-list-item>
        <v-col cols="12">
          <v-text-field label="模型地址"
                        append-outer-icon="place"
                        @keydown="handleLoadModel"
                        v-model="url"></v-text-field>
        </v-col>
      </v-list-item>
      <v-list-item>
        <v-col cols="4">
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
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { loadModel } from '../../scripts/model-core'

export default {
  data: () => ({
    isProxy: false,
  }),
  computed: {
    url: {
      get: function () {
        return this.$store.state.map.url
      },
      set: function (val) {
        this.changeUrl(val)
      }
    },
    maximumScreenSpaceError: {
      get: function () {
        return this.$store.state.map.maximumScreenSpaceError
      },
      set: function (val) {
        this.changeMaxSpaceErr(val)
      }
    },
    offsetZ: {
      get: function () {
        return this.$store.state.map.offset.z
      },
      set: function (val) {
        this.changeOffsetZ(val)
      }
    }
  },
  methods: {
    ...mapMutations('map', ['changeUrl', 'changeMaxSpaceErr', 'changeOffsetZ']),
    handleLoadModel (e) {
      if (e.key) {
        if (e.key !== 'Enter') return
      }
      loadModel(this.url, this.maximumScreenSpaceError, this.isProxy)
    }
  }
}
</script>

<style>
</style>