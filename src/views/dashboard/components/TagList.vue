<template>
  <v-card class="bg-surface rounded-xl h-100">
    <v-card-title class="d-flex align-stretch justify-space-between pa-0">
      <v-text-field
        v-model="name"
        label="Input name"
        hide-details
        variant="solo"
        prepend-inner-icon="mdi-playlist-plus"
        single-line
        class="text-text"
      ></v-text-field>
      <v-btn style="height: 56px" class="elevation-0" @click="handleCreate">新增</v-btn>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text class="px-2 py-2 list" v-if="!isLoading">
      <v-chip
        v-for="item in tags"
        :key="item.name"
        closable
        class="ma-1"
        variant="text"
        :style="`border: 2px solid ${randomColor()}`"
        @click:close="handleDelete(item)"
      >
        {{ item.name }}
      </v-chip>
    </v-card-text>
    <v-skeleton-loader
      v-for="index in 7"
      :key="index"
      :loading="isLoading"
      type="list-item"
    ></v-skeleton-loader>
  </v-card>
</template>

<script setup name="TagList">
import { ref, onMounted } from 'vue';

// import { useSnackbarStore } from '@/store/snackbar';
import { getTags } from '@/api/post';

// const snackbarStore = useSnackbarStore()

const name = ref('')
const tags = ref([])
const isLoading = ref(false)

onMounted(() => {
  getList()
})

const getList = async () => {
  isLoading.value = true
  const res = await getTags()
  isLoading.value = false

  if (res.code === 200) {
    tags.value = res.data.result
  }
}

const handleCreate = async () => {
  // const params = { name: name.value }
  // const { data } = await createTag(params)
  // if (data.value.status === 'success') {
  //   execute()
  //   name.value = ''
  //   snackbarStore.open({
  //     content: '新增标签成功',
  //     color: 'blue'
  //   })
  // }
}

const handleDelete = async () => {
  // const { data } = await deleteTag(item._id)
  // if (data.value.status === 'success') {
  //   execute()
  //   snackbarStore.open({
  //     content: '分类删除成功',
  //     color: 'blue'
  //   })
  // }
}

const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b}, .5)`
}
</script>

<style lang="scss" scoped>
.list {
  height: calc(100% - 56px);
  overflow: auto;
}

</style>
