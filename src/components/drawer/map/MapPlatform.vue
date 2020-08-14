<template>
  <div class="map-platform">
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          平台相关
        </v-subheader>
      </v-col>
    </v-row>
    <v-menu v-model="platformMenu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link
                     v-bind="attrs"
                     v-on="on">
          <v-list-item-action>
            <v-icon>airplay</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              平台相关配置
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <platform-card></platform-card>
    </v-menu>
    <v-divider dark
               class="my-4"></v-divider>
  </div>
</template>

<script>
import PlatformCard from '../../card/PlatformCard'
export default {
  components: {
    PlatformCard
  },
  data: () => ({
    platformMenu: false
  })
}
</script>

<style>
</style>