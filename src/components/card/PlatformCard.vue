<template>
  <div class="platform-card">
    <v-card>
      <v-list fluid>
        <v-list-item>
          <v-col cols="12">
            <v-text-field label="项目名称"
                          :value="companyName"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="6">
            <v-text-field label="项目地址"
                          :value="baseUrl"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="项目端口"
                          :value="basePort"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="6">
            <v-text-field label="车辆定位地址"
                          :value="carUrl"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="车辆定位端口"
                          :value="carPort"></v-text-field>
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
    companyName: {
      get: function () {
        return this.$store.state.platform.companyName
      },
      set: function (val) {
        this.changeCompanyName(val)
      }
    },
    baseUrl: {
      get: function () {
        return this.$store.state.platform.baseUrl
      },
      set: function (val) {
        this.changeBaseUrl(val)
      }
    },
    basePort: {
      get: function () {
        return this.$store.state.platform.basePort
      },
      set: function (val) {
        this.changeBasePort(val)
      }
    },
    carUrl: {
      get: function () {
        return this.$store.state.platform.carUrl
      },
      set: function (val) {
        this.changeCarUrl(val)
      }
    },
    carPort: {
      get: function () {
        return this.$store.state.platform.carPort
      },
      set: function (val) {
        this.changeCarPort(val)
      }
    }
  },
  methods: {
    ...mapMutations(
      'platform',
      [
        'changeCompanyName',
        'changeBaseUrl',
        'changeBasePort',
        'changeCarUrl',
        'changeCarPort'
      ]
    )
  }
}
</script>

<style>
</style>