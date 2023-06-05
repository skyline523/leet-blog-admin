<template>
  <v-layout class="d-flex justify-center align-center">
    <v-progress-circular color="primary" indeterminate :size="96" :width="6">
      <slot />
    </v-progress-circular>
  </v-layout>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
