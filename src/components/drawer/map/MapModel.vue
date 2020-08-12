<template>
  <div class="map-model">
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          地图相关
        </v-subheader>
      </v-col>
      <v-col cols="6"
             class="text-right">
        <v-btn class=""
               icon>
          <v-icon>done</v-icon>
        </v-btn>
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
    <v-list-item-group>
      <v-list-item>
        <v-list-item-action>
          <v-icon>crop</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="grey--text">
            获取当前视角
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-divider dark
               class="my-4"></v-divider>
  </div>
</template>

<script>
import ModelCard from '../../card/ModelCard'

export default {
  components: {
    ModelCard
  },
  data: () => ({
    menu: false,
  })
}
</script>

<style>
</style>