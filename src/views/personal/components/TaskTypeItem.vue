<template>
  <v-list-item
    :title="item.name"
    :value="item.value"
    :active="active"
  >
    <template #prepend>
      <v-icon :color="item.color">{{ item.icon }}</v-icon>
    </template>
    <template #append v-if="item.badge">
      <v-badge
        color="primary"
        :content="item.badge"
        inline
      ></v-badge>
    </template>
  </v-list-item>
</template>

<script setup name="TaskTypeItem">
import { toRefs } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  active: {
    type: Boolean,
    default: false
  }
})

const { item } = toRefs(props)
</script>

<style lang="scss" scoped>

</style>
