<template>
  <v-sheet color="background">
    <div class="d-flex justify-space-between align-center mt-4">
      <div class="d-flex">
        <v-select
          v-model="sort"
          :items="['Latest', 'Popular', 'Oldest']"
          variant="solo"
          hide-details
          density="compact"
          style="min-width: 108px"
          @update:modelValue="handleSort"
        ></v-select>
        <!-- <v-text-field
          v-model="keyword"
          placeholder="Search..."
          variant="solo"
          hide-details
          density="compact"
          prepend-inner-icon="mdi-magnify"
          class="text-text ml-4"
          style="width: 280px"
          @update:modelValue="handleSearch"
        ></v-text-field> -->
        <v-expansion-panels
          v-model="panel"
          color="background"
          class="ml-4 elevation-0"
        >
          <v-expansion-panel>
            <v-text-field
              v-model="keyword"
              placeholder="Search..."
              variant="solo"
              hide-details
              density="compact"
              prepend-inner-icon="mdi-magnify"
              class="text-text"
              style="width: 280px"
              @update:modelValue="handleSearch"
            ></v-text-field>
            <v-expansion-panel-text class="rounded-lg">
              <div class="d-flex flex-column align-center">
                <p class="text-h6">Not Found</p>
                <div class="d-flex flex-column align-center mt-4">
                  <p class="text-subtitle-2 text-center">No results found for "<span class="text-primary">{{ keyword }}</span>".</p>
                  <p class="text-subtitle-2 text-center">Trying checking for typos or using complete words.</p>
                </div>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div>
        <v-btn color="primary" prepend-icon="mdi-plus" @click="toCreatePost">New Post</v-btn>
      </div>
    </div>
    <div class="mt-8">
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
            height="360"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-if="data">
        <v-col
          v-for="(post, index) in data.posts"
          :key="post.id"
          cols="12"
          sm="6"
          md="4"
          :lg="index === 0 ? 6 : 3"
        >
          <PostItem :post="post" :cover="index <= 2"/>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script setup name="Post">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '@vueuse/core'

import PostItem from './components/PostItem.vue'

const router = useRouter()

const sort = ref('Latest')
const keyword = ref('')
const panel = ref('')
const skeletonCount = ref(8)
const url = ref('https://api-prod-minimal-v4.vercel.app/api/blog/posts')

const { isFetching, data } = useFetch(url).json()

const handleSort = (val) => {
  if (val === 'Latest') {
    data.value.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    console.log(val)
  }
  if (val === 'Popular') {
    data.value.posts.sort((a, b) => b.view - a.view)
    console.log(val)
  }
  if (val === 'Oldest') {
    data.value.posts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    console.log(val)
  }
}

const handleSearch = (val) => {
  console.log(123)
  if (val) panel.value = 0
  else panel.value = ''
}

const toCreatePost = () => {
  router.push('/blog/posts/create')
}
</script>

<style lang="scss" scoped>
:deep(.v-expansion-panel-text) {
  position: absolute;
  top: 41px;
  width: 100%;
  height: 136px;
}
</style>
