<template>
  <v-card class="elevation-0 h-100">
    <v-card-title class="d-flex flex-column justify-space-between pa-0">
      <v-text-field
        v-model="query"
        label="Input name and enter to create"
        hide-details
        variant="solo"
        prepend-inner-icon="mdi-plus"
        single-line
        class="text-text"
      ></v-text-field>
      <v-divider></v-divider>
    </v-card-title>

    <v-card-text class="px-0 py-2 list">
      <v-hover v-for="item in items" :key="item.name">
        <template v-slot:default="{ isHovering, props }">
          <v-card
            v-ripple
            v-bind="props"
            elevation="0"
            :color="isHovering ? 'info' : ''"
            :class="selected && item.name === selected.name ? 'bg-info' : ''"
            style="cursor: pointer;"
            @click="handleSelect(item)"
          >
            <v-card-text class="py-3 d-flex justify-space-between align-center">
              <v-badge inline color="primary" :content="24">
                <span class="mr-3">{{ item.name }}</span>
              </v-badge>

              <div>
                <v-btn
                  icon="mdi-square-edit-outline"
                  variant="text"
                  density="comfortable"
                >
                </v-btn>
                <v-btn
                  icon="mdi-delete-outline"
                  variant="text"
                  density="comfortable"
                >
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-hover>
    </v-card-text>
  </v-card>
</template>

<script setup name="MiniList">
import { toRefs, ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const { items } = toRefs(props)

const query = ref('')
const selected = ref(null)

const handleSelect = (data) => {
  selected.value = data
}
</script>

<style lang="scss" scoped>
.list {
  height: calc(100% - 56px);
  overflow: auto;
}
</style>
