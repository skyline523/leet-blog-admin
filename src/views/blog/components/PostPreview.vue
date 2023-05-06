<template>
  <v-card>
    <v-toolbar
      dark
      color="background"
    >
      <v-toolbar-title>Preview</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon="mdi-close"
        @click="emits('close')"
      >
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>

    <v-container fluid v-if="contents.title">
      <v-img v-if="contents.coverImage" :src="contents.coverImage" height="360" cover></v-img>
      <div class="container my-4">
        <p class="text-h5">{{ contents.title }}</p>
        <p class="text-subtitle-2">{{ contents.description }}</p>
        <div class="mb-8">
          <span>{{ contents.category }}</span>
          <v-divided vertical></v-divided>
          <v-chip
            v-for="item in 2"
            :key="item.name"
            class="mr-2 my-1"
          >
            Vue
          </v-chip>
        </div>

        <p v-html="contents.content"></p>
      </div>
    </v-container>

    <v-sheet v-else class="d-flex flex-column align-center justify-center h-100">
      <v-img src="@/assets/empty_content.svg" width="320" height="240" style="flex: unset"></v-img>
      <p class="mt-5 text-h5">Empty Content</p>
    </v-sheet>
  </v-card>
</template>

<script setup name="PostPreview">
import { toRefs } from 'vue'

const props = defineProps({
  contents: {
    type: Object,
    default: () => {}
  }
})
const { contents } = toRefs(props)

const emits = defineEmits(['close'])
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
}
</style>
