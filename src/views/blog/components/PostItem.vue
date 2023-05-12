<template>
  <v-card
    v-if="post"
    height="360"
    class="rounded-xl"
    style="position: relative"
  >
    <v-img
      :src="post.cover"
      :lazy-src="post.cover"
      height="200px"
      cover
      :class="{ 'cover': cover }"
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
    </v-img>

    <div v-if="cover" style="height: 200px;"></div>

    <v-card-text class="py-0 d-flex flex-column" style="height: 160px">
      <v-card-subtitle class="mt-4 pa-0" :class="{'text--mask': cover}">
        {{ new Date(post.createdAt).toLocaleDateString() }}
      </v-card-subtitle>

      <v-hover v-slot:default="{ isHovering, props }">
        <p
          v-bind="props"
          class="py-1 font-weight-bold cursor-pointer line-clamp-2 flex-fill"
          :class="{'text-decoration-underline': isHovering, 'title--mask': cover}"
          @click="toPostDetail"
        >{{ post.title }}</p>
      </v-hover>

      <div class="py-4 d-flex align-center justify-end">
        <div class="mx-1" :class="{'text--mask': cover}">
          <v-icon class="mr-1" size="x-small">mdi-chat-processing</v-icon>
          <span class="text-caption">{{ formatNumber(post.comment) }}</span>
        </div>
        <div class="mx-1" :class="{'text--mask': cover}">
          <v-icon class="mr-1" size="x-small">mdi-eye</v-icon>
          <span class="text-caption">{{ formatNumber(post.view) }}</span>
        </div>
        <div class="mx-1" :class="{'text--mask': cover}">
          <v-icon class="mr-1" size="x-small">mdi-share-variant</v-icon>
          <span class="text-caption">{{ formatNumber(post.share) }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup name="PostItem">
import { toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  // 铺满卡片，且成为背景
  cover: {
    type: Boolean,
    default: false
  }
})
const { post } = toRefs(props)

const router = useRouter()

const formatNumber = computed(() => (val) => {
  if (val >= 1000) return (val / 1000).toFixed(2) + 'k'
  else return val
})

const toPostDetail = () => {
  const slug = post.value.title.toLowerCase().split(' ').join('-')
  router.push(`/blog/posts/${slug}`)
}
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% !important;
  z-index: -1;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(22, 28, 36, 0.5);
  }
}
.title--mask {
  color: #fff;
}
.text--mask {
  color: #fff;
  opacity: 0.64;
}
</style>
