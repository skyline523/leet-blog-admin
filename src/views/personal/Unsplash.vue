<template>
  <div>
    <div class="d-flex flex-column flex-sm-row justify-space-between align-start pb-1 pb-sm-6">
      <v-text-field
        v-model="query"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        hide-details
        placeholder="Search photos..."
        style="width: 240px; max-width: 240px;"
      ></v-text-field>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" class="rounded-lg mt-2 mt-sm-0">
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

    <v-row v-if="isFetching">
      <v-col
        v-for="index in skeletonCount"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-skeleton-loader
          type="image, article"
          height="280"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-if="data">
      <v-col
        v-for="photo in data"
        :key="photo.id"
        cols="12"
        sm="6"
        md="4"
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
const skeletonCount = ref(9)

const { isFetching, data } = getPhotos(pageIndex.value, pageSize.value, sort.value)
</script>

<style lang="scss" scoped>

</style>
