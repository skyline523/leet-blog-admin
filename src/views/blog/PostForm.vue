<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card class="pa-6">
        <v-text-field
          variant="outlined"
          label="Post Title"
        ></v-text-field>
        <v-textarea
          label="Post Description"
          variant="outlined"
        ></v-textarea>
        <div>
          <p>Content</p>
          <Editor
            :api-key="editorKey"
            :init="{
              plugins: 'lists link image table fullscreen code help wordcount',
            }"
          />
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-text>
            <div class="d-flex align-center justify-space-between mt-2">
              <p>Publish</p>
              <v-switch
                color="primary"
                inset
                inline
                hide-details
                density="compact"
                style="flex: unset"
              ></v-switch>
            </div>
            <div class="d-flex align-center justify-space-between mt-2">
              <p>Enable comments</p>
              <v-switch
                color="primary"
                inset
                inline
                hide-details
                density="compact"
                style="flex: unset"
              ></v-switch>
            </div>
            <div class="mt-4">
              <v-select
                chips
                label="Select"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                multiple
                variant="outlined"
              ></v-select>
            </div>
            <div>
              <v-text-field
                variant="outlined"
                label="Meta Title"
              ></v-text-field>
              <v-textarea
                label="Meta Description"
                variant="outlined"
              ></v-textarea>
            </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup name="PostForm">
import Editor from '@tinymce/tinymce-vue'

const editorKey = import.meta.env.TINY_API_KEY
</script>

<style lang="scss" scoped>

</style>
