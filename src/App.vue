<template>
  <v-app id="app" :theme="configureStore.theme">
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view />
    </component>

    <ConfigureMenu />
    <Snackbar />
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import ConfigureMenu from '@/components/ConfigureMenu.vue';
import Snackbar from '@/components/Snackbar.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useConfigureStore } from '@/store/configure';

const configureStore = useConfigureStore()
const route = useRoute()

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

const layouts = {
  default: DefaultLayout,
  auth: AuthLayout
}

const currentLayout = computed(() => {
  const layoutName = route.meta.layout
  if (!layoutName) {
    return DefaultLayout
  }
  return layouts[layoutName]
})
</script>
