<template>
  <div class="car-card">
    <v-card>
      <v-list fluid>
        <v-list-item>
          <v-col cols="6">
            <v-checkbox v-model="carLocation"
                        label="需要车辆定位"></v-checkbox>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="12">
            <v-text-field label="定位账号"
                          v-model="carAccount"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="9">
            <v-text-field label="模型地址"
                          v-model="carUrl"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="模型比例"
                          v-model="carScale"></v-text-field>
          </v-col>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    carLocation: {
      get: function () {
        return this.$store.state.location.carLocation
      },
      set: function () {
        this.toggleCarLocation()
      }
    },
    carAccount: {
      get: function () {
        return this.$store.state.location.carAccount
      },
      set: function (val) {
        this.changeCarAccount(val)
      }
    },
    carUrl: {
      get: function () {
        return this.$store.state.location.car.url
      },
      set: function (val) {
        this.changeCar({ url: val })
      }
    },
    carScale: {
      get: function () {
        return this.$store.state.location.car.scale
      },
      set: function (val) {
        this.changeCar({ scale: val })
      }
    }
  },
  methods: {
    ...mapMutations('location', ['toggleCarLocation', 'changeCarAccount', 'changeCar'])
  }
}
</script>

<style>
</style>