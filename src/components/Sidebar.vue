<template>
  <v-navigation-drawer
    v-model="configureStore.sidebarVisible"
    :theme="navMode === 'evident' && 'darkTheme'"
    :color="navColor"
    class="px-2"
    width="280"
    :style="[navMode === 'evident' ? 'border: 0' : '']"
  >
    <v-list class="pt-4">
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        title="Admin"
        subtitle="Leet Programming"
        class="py-2"
        to="/"
        :ripple="false"
      >
      </v-list-item>
    </v-list>

    <v-list :lines="false" nav>
      <template v-for="(menu, index) in sidebarItem" :key="index">
        <div class="text-subtitle-2 mt-4 mb-2 px-2" v-if="menu.text">
          {{ menu.text }}
        </div>
        <template v-for="item in menu.items" :key="item.name">
          <v-list-item
            :value="item.link"
            :to="item.link"
            :active="item.link === route.path"
            class="rounded-lg"
          >
            <template #prepend>
              <v-icon :icon="item.icon" class="mr-3" :color="item.link === route.path ? 'primary' : ''"></v-icon>
            </template>

            <v-list-item-title class="text-text">{{ item.name }}</v-list-item-title>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup name="Sidebar">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router'

import config from '@/config';
import { useConfigureStore } from '@/store/configure'

const route = useRoute()
const configureStore = useConfigureStore()
const navMode = computed(() => configureStore.navColor)

const navColor = computed(() => {
  // const mode = configureStore.navColor
  if (navMode.value === 'evident') return '#1C2536'
  else if (navMode.value === 'discrete') return 'border'
  else return 'background'
})

const sidebarItem = ref(config.menu);
</script>

<style lang="scss" scoped>
.v-navigation-drawer__content {
  .v-list {
    box-shadow: none !important;
  }

}
</style>
