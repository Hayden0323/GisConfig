<template>
  <div class="people-card">
    <v-card>
      <v-list fluid>
        <v-list-item>
          <v-col cols="6">
            <v-switch v-model="needLocation"
                      label="需要人员定位"></v-switch>
          </v-col>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  needLocation: false
}
</script>

<style>
</style>