<template>
  <div class="w-100 pa-4 d-flex justify-space-between align-center">
    <div class="d-flex align-center">
      <v-checkbox-btn
        class="mx-1"
      ></v-checkbox-btn>
      <v-btn
        class="mx-1"
        variant="text"
        density="comfortable"
        :icon="starred ? 'mdi-star' : 'mdi-star-outline'"
        :color="starred ? 'amber' : ''"
        @click="starred = !starred"
      ></v-btn>
      <v-btn
        class="mx-1"
        variant="text"
        density="comfortable"
        :icon="important ? 'mdi-label-variant' : 'mdi-label-variant-outline'"
        :color="important ? 'amber' : ''"
        @click="important = !important"
      ></v-btn>
      <v-avatar class="mx-2">
        <v-img src="https://avatars.githubusercontent.com/u/76251617?v=4"></v-img>
      </v-avatar>
      <span class="mx-1 text-subtitle-1 font-weight-bold">{{ item.title }}</span>
      <span class="mx-3 text-subtitle-2">{{ item.desc }}</span>
      <div>
        <div
          v-for="label in item.labels"
          :key="label"
          :class="`bg-${labelColor[label]}`"
          class="mx-1 d-inline-flex justify-center align-center rounded text-caption"
          style="padding: 2px 6px;"
        >
          {{ label }}
        </div>
      </div>
    </div>
    <v-btn icon="mdi-delete-outline"></v-btn>
  </div>
</template>

<script setup name="TaskItem">
import { ref, toRefs } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const { item } = toRefs(props)

const starred = ref(item.value.starred)
const important = ref(item.value.important)
const labelColor = {
  'Admin': 'success',
  'Website': 'accent',
  'Server': 'primary'
}
</script>

<style lang="scss" scoped>

</style>
