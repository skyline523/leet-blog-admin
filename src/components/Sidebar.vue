<template>
  <v-navigation-drawer theme="darkTheme" color="#1C2536" class="px-2" width="280" style="border: 0">
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
import { ref } from 'vue';
import { useRoute } from 'vue-router'

import config from '@/config';

const route = useRoute()

const sidebarItem = ref(config.menu);
</script>

<style lang="scss" scoped>
.v-navigation-drawer__content {
  .v-list {
    box-shadow: none !important;
  }

}
</style>
