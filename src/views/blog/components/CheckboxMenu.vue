<template>
  <v-menu
    transition="scale-transition"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        append-icon="mdi-chevron-down"
        variant="text"
        class="px-2 font-weight-bold mr-2"
      >
        {{ menu.title }}
      </v-btn>
    </template>

    <v-list
      density="compact"
      width="220"
      class="rounded-lg"
    >
      <v-list-item :value="item" v-for="(item, index) in menu.items" :key="index">
        <v-checkbox
            v-model="selected"
            :value="item"
            hide-details
            color="primary"
            density="compact"
            @change="handleChange"
          >
            <template v-slot:label>
              <p class="ml-2 text-text font-weight-bold">{{ item }}</p>
            </template>
          </v-checkbox>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup name="CheckboxMenu">
import { ref, defineProps, defineEmits, toRefs, watch } from 'vue'

const props = defineProps({
  menu: {
    type: Object,
    required: true
  },
  checked: {
    type: Array,
    default: () => []
  }
})
const { menu, checked } = toRefs(props)
const emits = defineEmits(['change'])

watch(checked, (val) => {
  console.log(val)
  selected.value = val.map(item => item.name)
})

const selected = ref([])

const handleChange = () => {
  const result = selected.value.map(item => ({ key: menu.value.title, name: item}))
  emits('change', result)
}
</script>

<style lang="scss" scoped>

</style>
