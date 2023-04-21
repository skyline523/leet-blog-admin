<template>
  <v-layout>
    <Sidebar />

    <v-main>
      <v-layout class="app-main">
        <v-container fluid class="pa-0">
          <Appbar />
          <div class="px-4 pb-6 container">
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
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100vh;
  overflow: auto !important;
}
.container {
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
}

@media screen and (min-width: 600px) {
  .container {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    max-width: 1440px;
  }
}
</style>
