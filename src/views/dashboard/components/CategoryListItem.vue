<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-sheet
        v-bind="props"
        :color="isHovering ? 'info' : ''"
        class="elevation-0 rounded-lg bg-surface"
        style="cursor: pointer;"
      >
        <v-card-text class="py-3 d-flex justify-space-between align-center">
          <v-text-field
            v-if="isEdit"
            v-model="name"
            v-click-outside="onClickOutside"
            density="compact"
            hide-details
            variant="solo"
            class="mr-4"
            append-inner-icon="mdi-check"
            @click:append-inner="handleEdit"
          ></v-text-field>
          <v-badge v-else inline color="primary" :content="item.related">
            <span class="mr-3">{{ item.name }}</span>
          </v-badge>

          <div>
            <v-btn
              icon="mdi-square-edit-outline"
              variant="text"
              density="comfortable"
              class="included"
              @click="isEdit = !isEdit"
            >
            </v-btn>
            <v-btn
              icon="mdi-delete-outline"
              variant="text"
              density="comfortable"
              @click="handleDelete"
            >
            </v-btn>
          </div>
        </v-card-text>
      </v-sheet>
    </template>
  </v-hover>
</template>

<script setup name="CategoryListItem">
import { toRefs, ref } from 'vue'

import { updateCategory, deleteCategory } from '@/api/post'
import { useSnackbarStore } from '@/store/snackbar'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})
const emits = defineEmits(['update'])

const { item } = toRefs(props)

const snackbarStore = useSnackbarStore()

const isEdit = ref(false)
const name = ref(item.value.name)

const onClickOutside = () => {
  isEdit.value = false
  name.value = ''
}

const handleEdit = async () => {
  if (!name.value) {
    return snackbarStore.open({
      content: '修改时分类名不能为空',
      color: 'blue'
    })
  }
  if (name.value === item.value.name) {
    isEdit.value = false
    return
  }
  const { data } = await updateCategory(item.value._id, { name: name.value })
  if (data.value.status === 'success') {
    isEdit.value = false
    emits('update')
    snackbarStore.open({
      content: '分类更新成功',
      color: 'blue'
    })
  }
}

const handleDelete = async () => {
  const { data } = await deleteCategory(item.value._id)
  console.log(data)
  if (data.value.status === 'success') {
    emits('update')
    snackbarStore.open({
      content: '分类删除成功',
      color: 'blue'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
