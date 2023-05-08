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
          <span v-if="contents.category">{{ contents.category.name }} <v-icon>mdi-circle-small</v-icon></span>
          <v-chip
            v-for="item in contents.tags"
            :key="item._id"
            class="mr-2 my-1"
            size="small"
          >
            {{ item.name }}
          </v-chip>
        </div>

        <div v-html="contents.content" class="ProseMirror content"></div>
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
.v-container {
  height: calc(100vh - 64px);
  overflow: auto;
}
.container {
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  height: 100%;
}
.content {
  padding: 0;
  border: none;
  border-radius: unset;
  height: auto;
  max-height: unset;
  min-height: unset;
}
</style>
