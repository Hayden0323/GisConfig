<template>
  <div class="map-drawer">
    <map-model></map-model>
    <map-location></map-location>
    <div class="pa-2 text-center">
      <v-btn color="info"
             rounded
             class="white--text">
        导出配置
        <v-icon right
                dark>cloud_download</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import MapModel from '../map/MapModel'
import MapLocation from '../map/MapLocation'

export default {
  components: {
    MapModel,
    MapLocation
  },
  data: () => ({
  }),
}
</script>

<style>
</style>