<template>
  <div style="height: 76px" class="d-flex justify-space-between align-center px-3">
    <div>
      <v-btn icon="mdi-refresh" variant="text" density="comfortable"></v-btn>
    </div>
    <div class="d-flex align-center">
      <v-text-field
        v-model="keyword"
        placeholder="Search task"
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        hide-details
        style="width: 200px"
      ></v-text-field>
    </div>
  </div>
  <v-divider></v-divider>
</template>

<script setup name="TaskBar">
import { ref } from 'vue'

const keyword = ref('')
</script>

<style lang="scss" scoped>

</style>
