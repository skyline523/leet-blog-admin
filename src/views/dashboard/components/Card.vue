<template>
  <v-card class="rounded-xl">
    <v-card-text class="py-6 px-8 d-flex align-center">
      <v-icon :icon="item.icon" :color="item.color" :size="54"></v-icon>
      <div class="ml-8">
        <p class="text-subtitle-1 text-text text-no-wrap">{{ item.name }}</p>
        <p class="text-h4 font-weight-bold">{{ item.count }}</p>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="pa-2">
      <v-btn variant="text" class="rounded-xl">
        See all {{ item.name }}
        <v-icon icon="mdi-arrow-right"></v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup name="Card">
defineProps({
  item: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss" scoped>

</style>
