<template>
  <div>
    <div class="d-flex justify-space-between">
      <v-text-field
        v-model="query"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        placeholder="Search photos..."
        style="max-width: 240px"
      ></v-text-field>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" class="rounded-lg">
            Sorted By: <span class="text-capitalize">{{ sort }}</span>
          </v-btn>
        </template>

        <v-list v-model="sort" class="rounded-lg dark-shadow py-0" density="compact">
          <v-list-item
            v-for="item in sortOptions"
            :key="item"
            :active="item === sort"
            value="latest"
            class="rounded-lg ma-2 px-2"
            @click="sort = item"
          >
            <v-list-item-title class="text-capitalize">{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-row v-if="data">
      <v-col
        v-for="photo in data"
        :key="photo.id"
        cols="4"
      >
        <PhotoItem
          :photo="photo"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup name="Unsplash">
import { ref } from 'vue'

import { getPhotos } from '@/api/unsplash'
import PhotoItem from './components/PhotoItem.vue'

const query = ref('')
const sort = ref('latest')
const sortOptions = ref(['latest', 'oldest', 'popular'])
const pageIndex = ref(1)
const pageSize = ref(15)

const { data } = getPhotos(pageIndex.value, pageSize.value)
console.log(data)
</script>

<style lang="scss" scoped>

</style>
