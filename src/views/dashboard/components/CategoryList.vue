<template>
  <v-card class="bg-surface rounded-xl h-100">
    <v-card-title class="d-flex justify-space-between align-stretch pa-0">
      <v-text-field
        v-model="name"
        label="Input name"
        hide-details
        variant="solo"
        prepend-inner-icon="mdi-playlist-plus"
        single-line
        class="text-text"
      ></v-text-field>
      <v-btn style="height: 56px" class="elevation-0" @click="handleCreate">新增</v-btn>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text class="px-2 py-2 list" v-if="data">
      <template v-for="item in data.result" :key="item.name">
          <CategoryListItem :item="item" @update="execute"/>
      </template>
    </v-card-text>
    <v-skeleton-loader
      v-for="index in 5"
      :key="index"
      :loading="!data"
      type="list-item-two-line"
    ></v-skeleton-loader>
  </v-card>
</template>

<script setup name="CategoryList">
import { ref } from 'vue';

import CategoryListItem from './CategoryListItem.vue';
import { useSnackbarStore } from '@/store/snackbar';
import { createCategory, getCategorires } from '@/api/post';

const snackbarStore = useSnackbarStore()
const name = ref('')

const { data, execute } = getCategorires()

const handleCreate = async () => {
  const params = { name: name.value }
  const { data } = await createCategory(params)
  if (data.value.status === 'success') {
    execute()
    name.value = ''
    snackbarStore.open({
      content: '新增分类成功',
      color: 'blue'
    })
  }

}
</script>

<style lang="scss" scoped>
.list {
  height: calc(100% - 56px);
  overflow: auto;
}
</style>
