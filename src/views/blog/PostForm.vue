<template>
  <v-form ref="form" fast-fail @submit.prevent>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-6">
          <div class="mb-5">
            <p>Cover Image</p>
            <!-- <v-file-input label="File input" variant="underlined"></v-file-input> -->
            <v-text-field
              prepend-icon="mdi-paperclip"
              label="Upload file"
              variant="underlined"
              v-model="contents.coverImage"
              :rules="[(value) => !!value || '封面图片不能为空']"
              clearable
            ></v-text-field>
            <div class="elevation-1">
              <v-img
                v-if="contents.coverImage"
                style="margin: 0 auto; height: 240px"
                width="100%"
                cover
                :src="contents.coverImage"
              ></v-img>
              <v-img
                v-else
                style="margin: 0 auto; height: 240px"
                width="50%"
                src="@/assets/image_viewer.svg"
              ></v-img>
            </div>
          </div>
          <v-text-field
            variant="outlined"
            label="Post Title"
            v-model="contents.title"
            :rules="[(value) => !!value || '标题不能为空']"
          ></v-text-field>
          <v-textarea
            label="Post Description"
            variant="outlined"
            v-model="contents.description"
            :rules="[(value) => !!value || '简介不能为空']"
          ></v-textarea>
          <div>
            <p>Content</p>
            <Editor v-model="contents.content"/>
            <!-- <Editor
              :api-key="editorKey"
              :init="{
                plugins: 'lists link image table fullscreen code help wordcount',
              }"
            /> -->
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
                  v-model="contents.isPublish"
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
                  v-model="contents.enableComments"
                ></v-switch>
              </div>
              <div class="mt-4">
                <v-select
                  v-model="contents.category"
                  :loading="categoryLoading"
                  chips
                  label="Category"
                  :items="categoryOptions"
                  item-title="name"
                  return-object
                  variant="outlined"
                  @update:menu="fetchCategories"
                ></v-select>
              </div>
              <div>
                <v-select
                  v-model="contents.tags"
                  :loading="tagLoading"
                  chips
                  label="Tags"
                  :items="tagOptions"
                  item-title="name"
                  return-object
                  multiple
                  variant="outlined"
                  @update:menu="fetchTags"
                ></v-select>
              </div>
              <div>
                <v-text-field
                  variant="outlined"
                  label="Meta Title"
                  v-model="contents.metaTitle"
                >
                  <template #append-inner>
                    <v-tooltip text="Use Post Title" location="top">
                      <template v-slot:activator="{ props }">
                        <v-icon
                          v-bind="props"
                          icon="mdi-format-quote-close-outline"
                          style="cursor: pointer"
                          @click.stop="metaTitle = title"
                        ></v-icon>
                      </template>
                    </v-tooltip>
                  </template>
                </v-text-field>
                <v-textarea
                  label="Meta Description"
                  variant="outlined"
                  v-model="contents.metaDescription"
                >
                  <template #append-inner>
                    <v-tooltip text="Use Post Description" location="top">
                      <template v-slot:activator="{ props }">
                        <v-icon
                          v-bind="props"
                          icon="mdi-format-quote-close-outline"
                          style="cursor: pointer"
                          @click.stop="metaDescription = description"
                        ></v-icon>
                      </template>
                    </v-tooltip>
                  </template>
                </v-textarea>
              </div>
          </v-card-text>
        </v-card>
        <div class="d-flex mt-5" style="box-sizing: border-box; column-gap: 12px">
          <v-btn variant="outlined" size="large" style="flex: 1" @click="previewVisible = true">Preview</v-btn>
          <v-btn :loading="posting" color="primary" size="large" class="elevation-0" style="flex: 1" @click="handlePost">Post</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>

  <Teleport to="body">
    <v-dialog v-model="previewVisible" fullscreen transition="dialog-bottom-transition">
      <PostPreview v-if="previewVisible" :contents="contents" @close="previewVisible = false"/>
    </v-dialog>
  </Teleport>
</template>

<script setup name="PostForm">
import { ref, reactive } from 'vue'

import Editor from './components/Editor.vue'
import PostPreview from './components/PostPreview.vue'
import { useSnackbarStore } from '@/store/snackbar';
import { getCategorires, getTags, createPost } from '@/api/post';

const snackbarStore = useSnackbarStore()

const contents = reactive({
  coverImage: '',
  title: '',
  description: '',
  isPublish: true,
  enableComments: true,
  category: null,
  tags: [],
  metaTitle: '',
  metaDescription: '',
  content: `
    <h2>Hi there,</h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there
        are all kind of basic text styles you’d probably expect from a text
        editor. But wait until you see the lists:
      </p>
      <ul>
        <li>That’s a bullet list with one …</li>
        <li>… or two list items.</li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more.
        Let’s try a code block:
      </p>
      <pre>
        <code class="language-css">body {
        display: none;
        }
        </code>
      </pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg
        though. Give it a try and click a little bit around. Don’t forget to
        check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
      `
})

const categoryOptions = ref([])
const categoryLoading = ref(false)
const tagOptions = ref([])
const tagLoading = ref(false)
const posting = ref(false)
const previewVisible = ref(false)

const handlePost = async () => {
  posting.value = true
  const params = { ...contents }
  if (contents.category) {
    params.category = contents.category._id
  }
  if (contents.tags.length > 0) {
    params.tags = contents.tags.map(item => item._id)
  }
  const { isFetching, data } = await createPost(contents)
  if (isFetching) posting.value = false
  if (data.value.status === 'success') {
    snackbarStore.open({
      content: '新增文章成功',
      color: 'blue'
    })
  }
}

const fetchCategories = async (e) => {
  if (categoryOptions.value.length === 0) {
    if (e) {
      categoryLoading.value = true
      const { data } = await getCategorires()
      categoryOptions.value = data.value.result
      categoryLoading.value = false
    }
  }
}

const fetchTags = async (e) => {
  if (tagOptions.value.length === 0) {
    if (e) {
      tagLoading.value = true
      const { data } = await getTags()
      tagOptions.value = data.value.result
      tagLoading.value = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
