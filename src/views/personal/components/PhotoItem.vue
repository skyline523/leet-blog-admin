<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="rounded-lg"
        style="position: relative; height: 280px"
      >
        <div class="rounded-lg" >
          <v-img
            :src="photo.urls.regular"
            :lazy-src="photo.urls.regular"
            :height="isHovering ? '280' : '264'"
            :class="isHovering ? 'ma-0' : 'ma-2'"
            cover
            class="rounded-lg transition"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card class="card h-100">
              <div class="h-100 px-2 py-2 text-center d-flex flex-column align-center justify-space-between">
                <div class="w-100 d-flex align-center justify-space-between">
                  <div></div>
                  <v-btn
                    prepend-icon="mdi-heart-outline"
                    density="comfortable"
                    @click="isLike ? onUnlikePhoto() : onLikePhoto()"
                  >
                    <template v-slot:prepend>
                      <v-icon v-if="isLike" color="error">mdi-heart</v-icon>
                      <v-icon v-else>mdi-heart-outline</v-icon>
                    </template>
                    {{ likes }}
                  </v-btn>
                </div>

                <div class="px-6">
                  <p class="mb-2 line-clamp-2 text-white">{{ photo.description || photo.alt_description }}</p>
                  <v-btn variant="flat">See More Info</v-btn>
                </div>

                <div class="w-100 d-flex align-center justify-end">
                  <v-tooltip
                    text="Download"
                    location="bottom"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn v-bind="props" icon="mdi-download" density="comfortable" class="mx-1" @click="onDownloadPhoto">
                      </v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip
                    text="Copy link"
                    location="bottom"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn v-bind="props" icon="mdi-link" density="comfortable" class="mx-1" @click="onCopyPhotoLink"></v-btn>
                    </template>
                  </v-tooltip>
                </div>
              </div>
            </v-card>
          </v-img>
        </div>
        <!-- <v-overlay
          :model-value="isHovering"
          contained
          min-width="100%"
          class="w-100 align-center justify-center"
        >
          <div style="height: 280px" class="px-2 py-2 text-center d-flex flex-column align-center justify-space-between">
            <div class="w-100 d-flex align-center justify-space-between">
              <div></div>
              <v-btn
                prepend-icon="mdi-heart-outline"
                density="comfortable"
                @click="isLike ? onUnlikePhoto() : onLikePhoto()"
              >
                <template v-slot:prepend>
                  <v-icon v-if="isLike" color="error">mdi-heart</v-icon>
                  <v-icon v-else>mdi-heart-outline</v-icon>
                </template>
                {{ likes }}
              </v-btn>
            </div>

            <div class="px-6">
              <p class="mb-2 line-clamp-2 text-background">{{ photo.description || photo.alt_description }}</p>
              <v-btn variant="flat">See More Info</v-btn>
            </div>

            <div class="w-100 d-flex align-center justify-end">
              <v-tooltip
                text="Download"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" icon="mdi-download" density="comfortable" class="mx-1" @click="onDownloadPhoto">
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip
                text="Copy link"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" icon="mdi-link" density="comfortable" class="mx-1" @click="onCopyPhotoLink"></v-btn>
                </template>
              </v-tooltip>
            </div>
          </div>
        </v-overlay> -->
      </v-card>
    </template>
  </v-hover>
</template>

<script setup name="PhotoItem">
import { toRefs, ref } from 'vue'
import { useClipboard } from '@vueuse/core'

import { useSnackbarStore } from '@/store/snackbar'
import { useUserStore } from '@/store/user'
import { likePhoto, unlikePhoto } from '@/api/unsplash'

const props = defineProps({
  photo: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['confirm', 'remove'])
const { photo } = toRefs(props)
const isLike = ref(photo.value.liked_by_user)
const likes = ref(photo.value.likes)

const snackbarStore = useSnackbarStore()
const userStore = useUserStore()

const { copy } = useClipboard({ legacy: true })

const onDownloadPhoto = () => {
  const a = document.createElement("a");
  a.href = photo.value.links.download + "&force=true";
  a.download = photo.value.id + ".jpg";
  a.click();
  snackbarStore.open({
    content: 'Downloading...',
    color: 'blue'
  })
}

const onCopyPhotoLink = () => {
  copy(photo.value.urls.full)
  snackbarStore.open({
    content: 'Copied!',
    color: 'blue'
  })
}

const onCheckUnsplashToken = () => {
  const token = userStore.unsplashToken

  if (!token) {
    emits('confirm')

    return false
  } else return true
}

const onLikePhoto = async () => {
  const result = onCheckUnsplashToken()

  if (result) {
    const res = await likePhoto(photo.value.id)
    if (res.status === 201) {
      isLike.value = true
      likes.value ++
      snackbarStore.open({
        content: 'Liked!',
        color: 'blue'
      })
    }
  }
}

const onUnlikePhoto = async () => {
  const result = onCheckUnsplashToken()

  if (result) {
    const res = await unlikePhoto(photo.value.id)
    if (res.status === 200) {
      isLike.value = false
      likes.value --
      emits('remove', photo.value.id)
      snackbarStore.open({
        content: 'Unliked!',
        color: 'blue'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;

  &:hover {
    opacity: 1;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 24px 0px !important;
  }
}
.transition {
  transition: 0.3s;
}
</style>
