<template>
  <v-skeleton-loader
    :loading="isFetching"
    type="image, article"
    class="mt-6 w-100 rounded-xl"
    style="aspect-ratio: 16/9;"
  >
    <v-card
      v-if="data"
      class="w-100 rounded-xl elevation-4"
    >
      <div
        style="position: relative; aspect-ratio: 16/9;"
        class="d-flex flex-column justify-space-between w-100 pa-0 pa-sm-4"
      >
        <div class="title--mask my-2 my-md-8 pa-6 pa-md-10 pa-lg-16">
          <p class="text-h6 text-md-h3 font-weight-bold">{{ data.post.title }}</p>
          <p class="mt-2 mt-md-4 text-subtitle-1">{{ data.post.description }}</p>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-space-between pa-6 pa-md-10 pa-lg-16">
          <div>
            <v-chip v-for="item in data.post.tags" :key="item" class="bg-text ma-1">
              {{ item }}
            </v-chip>
            <p class="text--mask text-subtitle-2 ma-1">
              {{ new Date(data.post.createdAt).toLocaleDateString() }}
            </p>
          </div>
          <v-tooltip
            text="Share Link"
            location="bottom"
          >
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="mdi-share-variant" color="primary"></v-btn>
            </template>
          </v-tooltip>
        </div>
        <v-img
          :src="data.post.cover"
          :lazy-src="data.post.cover"
          cover
          aspect-ratio="16/9"
          class="cover rounded-t-xl"
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
      </div>

      <v-card-text class="px-0 px-md-10 px-lg-16">
        <!-- <MdEditor v-model="data.post.body" previewOnly class="bg-surface text-text"/> -->
        <p v-html="data.post.body" class="ProseMirror content"></p>
      </v-card-text>
    </v-card>
  </v-skeleton-loader>
</template>

<script setup name="Post">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core'
// import MdEditor from "md-editor-v3";
// import "md-editor-v3/lib/style.css";

const route = useRoute()

const url = ref('https://api-prod-minimal-v4.vercel.app/api/blog/post')

const { isFetching, data } = useFetch(`${url.value}?title=${route.params.title}`).json()
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% !important;
  z-index: -1;
  overflow: hidden;

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
.content {
  border: none;
  min-height: unset;
  max-height: unset;
  height: auto;
}
:deep(.v-skeleton-loader__image) {
  height: 360px;
}
</style>
