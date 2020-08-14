<template>
  <div class="map-location">
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          定位相关
        </v-subheader>
      </v-col>
    </v-row>
    <v-menu v-model="peopleMenu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link
                     v-bind="attrs"
                     v-on="on">
          <v-list-item-action>
            <v-icon>people</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              人员定位配置
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <people-card></people-card>
    </v-menu>
    <v-menu v-model="carMenu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link
                     v-bind="attrs"
                     v-on="on">
          <v-list-item-action>
            <v-icon>drive_eta</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              车辆定位配置
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

    </v-menu>
    <v-divider dark
               class="my-4"></v-divider>
  </div>
</template>

<script>
import PeopleCard from '../../card/peopleCard'

export default {
  components: {
    PeopleCard
  },
  data: () => ({
    peopleMenu: false,
    carMenu: false
  })
}
</script>

<style>
</style>