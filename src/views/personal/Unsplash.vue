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
        @change="onSearch"
      ></v-text-field>
      <div v-if="isSearch"></div>
      <v-menu v-else>
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
            @click="onChangeSort(item)"
          >
            <v-list-item-title class="text-capitalize">{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

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
        />
      </v-col>
      <div class="w-100 py-8 d-flex justify-center">
        <v-btn color="primary" @click="loadMore" :loading="isMore">Load More</v-btn>
      </div>
    </v-row>

    <Teleport to="body">
      <v-dialog
        v-model="authDialog"
        width="auto"
      >
        <v-card>
          <v-card-text style="height: 120px; justify-content: center !important" class="d-flex flex-column">
            <p class="text-h6 text-center">You have not authorized Unsplash</p>
            <p class="text-subtitle-1 text-center">You will be redirected to the authorization page after clicking confirm</p>
          </v-card-text>
          <v-card-actions class="d-flex justify-end px-4">
            <v-btn @click="authDialog = false">Cancel</v-btn>
            <v-btn color="primary" @click="onRedirectAuth">Confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </Teleport>
  </div>
</template>

<script setup name="Unsplash">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import { getPhotos, getSearch } from '@/api/unsplash'
import PhotoItem from './components/PhotoItem.vue'

const query = ref('')
const sort = ref('latest')
const sortOptions = ref(['latest', 'oldest', 'popular'])
const pageIndex = ref(1)
const pageSize = ref(18)
const skeletonCount = ref(9)
const photos = ref([])
const isLoading = ref(false)
const isMore = ref(false) // 是否正在加载更多
const isSearch = ref(false) // 是否为搜索结果
const authDialog = ref(false)

const router = useRouter()

onMounted(() => {
  getList()
})

watch(query, () => {
  if (!query.value) {
    isSearch.value = false
    getList()
  }
})

const onRedirectAuth = () => {
  router.push('/auth/unsplash')
}

const getList = async () => {
  isLoading.value = true
  const res = await getPhotos(pageIndex.value, pageSize.value, sort.value)
  isLoading.value = false

  if (res.status === 200) {
    photos.value = res.data
  }
}

const onSearch = async () => {
  if (query.value) {
    isSearch.value = true
    isLoading.value = true
    pageIndex.value = 1
    const res = await getSearch(pageIndex.value, pageSize.value, sort.value, query.value)
    isLoading.value = false

    if (res.status === 200) {
      photos.value = res.data.photos.results
    }
  }
}

const onChangeSort = (item) => {
  sort.value = item
  getList()
}

const loadMore = async () => {
  isMore.value = true
  pageIndex.value++
  const res = await getPhotos(pageIndex.value, pageSize.value, sort.value)

  if (res.status === 200) {
    photos.value = [...photos.value, ...res.data]
    isMore.value = false
  }
}
</script>

<style lang="scss" scoped>

</style>
