<template>
  <v-layout>
    <Sidebar />

    <v-main>
      <v-layout class="app-main" ref="el">
        <v-container fluid class="pa-0">
          <Appbar />
          <div
            class="px-4 py-6 common-layout"
            :class="{'compact-layout': configureStore.content === 'compact'}"
          >
            <PageTitle />
            <Breadcrumb />
            <slot />
          </div>
        </v-container>
      </v-layout>
    </v-main>

    <div v-show="y >= 2400" class="scroll-button" transition="slide-x-transition">
      <v-tooltip
        text="Scroll Up"
        location="top"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="primary" icon="mdi-rocket-outline" @click="scrollToTop"></v-btn>
        </template>
      </v-tooltip>
    </div>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'

import Sidebar from '@/components/Sidebar.vue'
import Appbar from '@/components/Appbar.vue'
import PageTitle from '@/components/PageTitle.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import { useConfigureStore } from '@/store/configure'

const configureStore = useConfigureStore()

const el = ref(null)
const { y } = useScroll(el, { throttle: 300 })

const scrollToTop = () => {
  // console.log(y)
}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100vh;
  overflow: auto !important;
}
.scroll-button {
  position: fixed;
  right: 28px;
  bottom: 80px;
  z-index: 999
}
</style>
