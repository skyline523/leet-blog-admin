<template>
  <div>
    <v-alert
      v-if="!userStore.unsplashToken"
      density="compact"
      color="secondary"
      class="mb-6"
    >
      <template #text>
        <div class="d-flex align-center">
          <v-icon class="mr-2">mdi-shield-alert-outline</v-icon>
          <span class="mr-2">Only after authorizing unsplash can you view the complete liked photos.</span>
          <router-link to="/auth/unsplash">Click to auth.</router-link>
        </div>
      </template>
    </v-alert>
    <v-row v-if="isLoading">
      <v-col
        v-for="index in skeletonCount"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-skeleton-loader
          type="image, article"
          height="280"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="photo in photos"
        :key="photo.id"
        cols="12"
        sm="6"
        md="4"
      >
        <PhotoItem
          :photo="photo"
          @confirm="authDialog = true"
          @remove="onUnlike"
        />
      </v-col>
      <div v-if="photos.length >= pageSize || !noMore" class="w-100 py-8 d-flex justify-center">
        <v-btn color="primary" @click="loadMore" :loading="isMore">Load More</v-btn>
      </div>
    </v-row>
    <v-sheet v-if="photos.length == 0" class="py-16 d-flex flex-column align-center justify-center h-100">
      <v-img src="@/assets/empty_content.svg" width="320" height="240" style="flex: unset"></v-img>
      <p class="mt-5 text-h5">No Photos</p>
    </v-sheet>
  </div>
</template>

<script setup name="TabGallery">
import { ref, onMounted } from 'vue'

import { getUserLikedPhotos } from '@/api/unsplash'
import { useUserStore } from '@/store/user'
import PhotoItem from './PhotoItem.vue'

const pageIndex = ref(1)
const pageSize = ref(18)
const skeletonCount = ref(9)
const photos = ref([])
const isLoading = ref(false)
const isMore = ref(false) // 是否正在加载更多
const noMore = ref(false)

const userStore = useUserStore()

onMounted(() => {
  getList()
})

const getList = async () => {
  isLoading.value = true
  const res = await getUserLikedPhotos(pageIndex.value, pageSize.value)
  isLoading.value = false

  if (res.status === 200) {
    photos.value = res.data
    if (res.data.length < pageSize.value) noMore.value = true
  }
}

const loadMore = async () => {
  isMore.value = true
  pageIndex.value ++
  const res = await getUserLikedPhotos(pageIndex.value, pageSize.value)

  if (res.status === 200) {
    photos.value = [...photos.value, ...res.data]
    isMore.value = false
    if (res.data.length < pageSize.value) noMore.value = true

  }
}

const onUnlike = (id) => {
  photos.value = photos.value.filter(item => item.id !== id)
}
</script>

<style lang="scss" scoped>

</style>
