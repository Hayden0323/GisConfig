<template>
  <div class="common-snack">
    <v-snackbar v-model="isShow"
                :top="true"
                :color="color">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text
               dark
               @click="configSnack(false)"
               v-bind="attrs">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('snack', ['text', 'color']),
    isShow: {
      get: function () {
        return this.$store.state.snack.isShow
      },
      set: function () {
        this.configSnack(false)
      }
    }
  },
  methods: {
    ...mapMutations('snack', ['configSnack'])
  }
}
</script>

<style>
</style>