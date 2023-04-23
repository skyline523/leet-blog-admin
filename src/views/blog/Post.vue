<template>
  <v-card>
    <v-card-title class="d-flex flex-column justify-space-between pa-0">
      <v-text-field
        label="Search by post title"
        hide-details
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        single-line
        class="text-text"
      ></v-text-field>
    </v-card-title>
    <v-card-title class="pa-0">
      <v-divider></v-divider>
      <div class="pa-4 text-text d-flex flex-wrap">
        <template v-if="filterKeywords.length > 0">
          <v-chip
            v-for="item in filterKeywords"
            :key="item.name"
            class="mr-2 my-1"
            closable
            @click:close="handleCloseChip(item)"
          >
            {{ item.key }}:{{ item.name }}
          </v-chip>
        </template>
        <p v-else class="text-caption">No filters applied</p>
      </div>
      <v-divider></v-divider>
      <div class="pa-2">
        <CheckboxMenu :menu="categories" :checked="checkedCategories" @change="handleChecked"/>
        <CheckboxMenu :menu="tags" :checked="checkedTags" @change="handleChecked"/>
        <v-btn color="primary" elevation="0">
          <v-icon icon="mdi-plus"></v-icon>
          Create
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-data-table-server
        v-model:items-per-page="pageSize"
        :headers="headers"
        :items-length="total"
        :items="tableData"
        :loading="loading"
        class="elevation-0"
        item-value="name"
      ></v-data-table-server>
    </v-card-text>
  </v-card>
</template>

<script setup name="Post">
import { ref } from 'vue'

import CheckboxMenu from './components/CheckboxMenu.vue';

const headers = [
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'Calories', key: 'calories', align: 'end' },
  { title: 'Fat (g)', key: 'fat', align: 'end' },
  { title: 'Carbs (g)', key: 'carbs', align: 'end' },
  { title: 'Protein (g)', key: 'protein', align: 'end' },
  { title: 'Iron (%)', key: 'iron', align: 'end' },
]

const pageSize = ref(5)
const total = ref(12)
const loading = ref(false)
const tableData = ref([{
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7',
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1',
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45',
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22',
}])
const categories = ref({
  title: 'Category',
  items: ['Frontend', 'Backend', 'ChatGPT']
})
const tags = ref({
  title: 'Tag',
  items: ['React', 'Node.js', 'Vuetify', 'Vue3', 'Pinia']
})
const checkedTags = ref([])
const checkedCategories = ref([])
const filterKeywords = ref([])

const handleChecked = (e) => {
  if (e.length > 0) {
    if (e[0].key === 'Tag') checkedTags.value = e
    if (e[0].key === 'Category') checkedCategories.value = e
  }
  filterKeywords.value = [...checkedTags.value, ...checkedCategories.value]
}

const handleCloseChip = (e) => {
  if (e.key === 'Tag') checkedTags.value = checkedTags.value.filter(item => item.name !== e.name)
  if (e.key === 'Category') checkedCategories.value = checkedCategories.value.filter(item => item.name !== e.name)
  filterKeywords.value = [...checkedTags.value, ...checkedCategories.value]
}

</script>

<style lang="scss" scoped>

</style>
