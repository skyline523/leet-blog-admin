<template>
  <v-card class="bg-surface rounded-xl h-100">
    <v-card-title class="d-flex flex-column justify-space-between pa-0">
      <v-text-field
        v-model="name"
        label="Input name and enter to create"
        hide-details
        variant="solo"
        prepend-inner-icon="mdi-playlist-plus"
        single-line
        class="text-text"
        @change="handleCreate"
      ></v-text-field>
      <v-divider></v-divider>
    </v-card-title>

    <v-card-text class="px-2 py-2 list">
      <v-chip
        v-for="item in items"
        :key="item.name"
        closable
        class="ma-1"
        variant="text"
        :style="`border: 2px solid ${randomColor()}`"
      >
        {{ item.name }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script setup name="TagList">
import { ref, onBeforeMount } from 'vue';

import { useSnackbarStore } from '@/store/snackbar';
import { createTag, getTags } from '@/api/post';

const snackbarStore = useSnackbarStore()

const name = ref('')
const items = ref([])

onBeforeMount(() => {
  getAll()
})

const handleCreate = async () => {
  const params = { name: name.value }
  const { data } = await createTag(params)
  if (data.status === 'success') {
    getAll()
    name.value = ''
    snackbarStore.open({
      message: '新增标签成功',
      color: 'blue'
    })
  }

}

const getAll = async () => {
  const res = await getTags()
  if (res.status === 'success') {
    items.value = res.result
  }
}

const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b}, .5)`
}
</script>

<style lang="scss" scoped>
.list {
  height: calc(100% - 56px);
  overflow: auto;
}

</style>
