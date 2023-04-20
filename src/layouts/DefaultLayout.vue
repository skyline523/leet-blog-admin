<template>
  <v-layout>
    <Sidebar />

    <v-main>
      <v-layout class="app-main">
        <v-container fluid class="pa-0">
          <Toolbar />
          <div class="px-4">
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
import Toolbar from '@/components/Toolbar.vue'
import PageTitle from '@/components/PageTitle.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100vh;
  overflow: auto !important;
}
</style>
