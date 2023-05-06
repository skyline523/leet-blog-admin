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

    <v-sheet v-if="contents.title">
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader>User Controls</v-list-subheader>
        <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
        <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader>General</v-list-subheader>
        <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
          <template v-slot:prepend>
            <v-checkbox v-model="notifications"></v-checkbox>
          </template>
        </v-list-item>
        <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
          <template v-slot:prepend>
            <v-checkbox v-model="sound"></v-checkbox>
          </template>
        </v-list-item>
        <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
          <template v-slot:prepend>
            <v-checkbox v-model="widgets"></v-checkbox>
          </template>
        </v-list-item>
      </v-list>
    </v-sheet>

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

</style>
