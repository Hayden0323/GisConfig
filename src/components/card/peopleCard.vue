<template>
  <div class="people-card">
    <v-card>
      <v-list fluid>
        <v-list-item>
          <v-col cols="6">
            <v-checkbox v-model="peopleLocation"
                        label="需要人员定位"></v-checkbox>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="8">
            <v-radio-group v-model="isBlueTooth"
                           row>
              <v-radio label="经纬度定位"
                       :value="false"></v-radio>
              <v-radio label="蓝牙定位"
                       :value="true"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="4">
            <v-text-field label="高程"
                          hint="地图右击可获取高程"
                          :value="height"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="6">
            <v-text-field label="蓝牙原点经度"
                          :value="lng"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="蓝牙原点纬度"
                          :value="lat"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="6">
            <v-text-field label="蓝牙模式角度"
                          :value="angle"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="蓝牙模式比例"
                          :value="scale"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="6">
            <v-text-field label="定位账号"
                          :value="username"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="定位密码"
                          :value="password"></v-text-field>
          </v-col>
        </v-list-item>
        <v-list-item>
          <v-col cols="9">
            <v-text-field label="模型地址"
                          :value="staffUrl"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="模型比例"
                          :value="staffScale"></v-text-field>
          </v-col>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    peopleLocation: {
      get: function () {
        return this.$store.state.location.peopleLocation
      },
      set: function () {
        this.togglePeopleLocation()
      }
    },
    isBlueTooth: {
      get: function () {
        return this.$store.state.location.isBlueTooth
      },
      set: function () {
        this.toggleBlueTooth()
      }
    },
    lng: {
      get: function () {
        return this.$store.state.location.btOriginal[0]
      },
      set: function (val) {
        this.changebtOriginal({ lng: val })
      }
    },
    lat: {
      get: function () {
        return this.$store.state.location.btOriginal[1]
      },
      set: function (val) {
        this.changebtOriginal({ lat: val })
      }
    },
    angle: {
      get: function () {
        return this.$store.state.location.btAngle
      },
      set: function (val) {
        this.changebtAngle(val)
      }
    },
    scale: {
      get: function () {
        return this.$store.state.location.btScale
      },
      set: function (val) {
        this.changebtScale(val)
      }
    },
    username: {
      get: function () {
        return this.$store.state.location.username
      },
      set: function (val) {
        this.changeUsername(val)
      }
    },
    password: {
      get: function () {
        return this.$store.state.location.password
      },
      set: function (val) {
        this.changePassword(val)
      }
    },
    staffUrl: {
      get: function () {
        return this.$store.state.location.staff.url
      },
      set: function (val) {
        this.changeStaff({ url: val })
      }
    },
    staffScale: {
      get: function () {
        return this.$store.state.location.staff.scale
      },
      set: function (val) {
        this.changeStaff({ scale: val })
      }
    },
    height: {
      get: function () {
        return this.$store.state.location.height
      },
      set: function (val) {
        this.changeHeight(val)
      }
    }
  },
  methods: {
    ...mapMutations(
      'location',
      [
        'togglePeopleLocation',
        'toggleBlueTooth',
        'changebtOriginal',
        'changebtAngle',
        'changebtScale',
        'changeUsername',
        'changePassword',
        'changeStaff',
        'changeHeight'
      ]
    )
  }
}
</script>

<style>
</style>