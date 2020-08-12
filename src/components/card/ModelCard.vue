<template>
  <v-card>
    <v-list>
      <v-list-item>
        <v-col cols="9">
          <v-text-field label="模型地址"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn color="primary"
                 small>加载模型</v-btn>
        </v-col>
      </v-list-item>
      <v-list-item>
        <v-col cols="12">
          <v-slider v-model="precision"
                    min="1"
                    max="16"
                    label="模型精度"></v-slider>
        </v-col>
      </v-list-item>

      <v-list-item>
        <v-col cols="12">
          <v-slider v-model="height"
                    min="-50"
                    max="100"
                    label="高度偏移值"></v-slider>
        </v-col>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    precision: 8,
    height: 0
  })
}
</script>

<style>
</style>