<template>
  <v-layout>
    <Sidebar />

    <v-main>
      <div class="pa-4 app-main">
        <Toolbar />
        <router-view />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue'
import Toolbar from '@/components/Toolbar.vue'

</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
}
</style>
