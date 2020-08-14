<template>
  <div class="map-drawer">
    <map-model></map-model>
    <map-location></map-location>
    <map-platform></map-platform>
    <div class="pa-2 text-center">
      <v-btn color="info"
             rounded
             @click="handleExportJSON"
             class="white--text">
        导出配置
        <v-icon right
                dark>cloud_download</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import FileSaver from 'file-saver'
import { getJSON } from '../../../scripts/export'

import MapModel from '../map/MapModel'
import MapLocation from '../map/MapLocation'
import MapPlatform from '../map/MapPlatform'

export default {
  components: {
    MapModel,
    MapLocation,
    MapPlatform
  },
  data: () => ({
  }),
  methods: {
    handleExportJSON () {
      const jsonObj = getJSON()
      const data = JSON.stringify(jsonObj)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, 'config.json')
    }
  }
}
</script>

<style>
</style>