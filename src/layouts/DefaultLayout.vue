<template>
  <v-layout>
    <Sidebar />

    <v-main>
      <v-layout class="app-main">
        <v-container fluid class="pa-0">
          <Appbar />
          <div
            class="px-4 pb-6 common-layout"
            :class="{'compact-layout': configureStore.content === 'compact'}"
          >
            <PageTitle />
            <Breadcrumb />
            <slot />
          </div>
        </v-container>
      </v-layout>
    </v-main>
  </v-layout>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Appbar from '@/components/Appbar.vue'
import PageTitle from '@/components/PageTitle.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import { useConfigureStore } from '@/store/configure'

const configureStore = useConfigureStore()
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100vh;
  overflow: auto !important;
}
</style>
