<template>
  <v-app-bar :elevation="0" color="background">
    <template #prepend>
      <v-tooltip :text="`${menuTooltip} Menu`" location="bottom">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-menu" @click="handleSetSidebar"></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Search" location="bottom">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-magnify"></v-btn>
        </template>
      </v-tooltip>
    </template>
    <template #append>
      <v-menu location="bottom">
        <template #activator="{ props }">
          <v-btn icon="mdi-account" v-bind="props"></v-btn>
        </template>

        <v-list v-if="userInfo" class="rounded-lg dark-shadow" density="compact" color="surface" width="200">
          <v-list-item :title="userInfo.username" :subtitle="userInfo.email" class="pb-4 px-5"></v-list-item>
          <v-divider thickness="0.2"></v-divider>
          <v-list-item value="profile" class="rounded-lg ma-2 px-2">
            <template #prepend>
              <v-icon icon="mdi-account-outline" class="mr-2"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1">Profile</v-list-item-title>
          </v-list-item>
          <v-list-item value="setting" class="rounded-lg ma-2 px-2">
            <template #prepend>
              <v-icon icon="mdi-cog" class="mr-2"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1">Setting</v-list-item-title>
          </v-list-item>
          <v-divider thickness="0.2"></v-divider>
          <div class="mt-2 d-flex justify-center text-body-2">
            <v-btn variant="text" @click="Logout">Logout</v-btn>
          </div>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';

import { useUserStore } from '@/store/user';
import { useConfigureStore } from '@/store/configure'

const userStore = useUserStore();
const configureStore = useConfigureStore()

const menuTooltip = ref('Hide')

const userInfo = computed(() => userStore.userInfo);

onMounted(() => {
  userStore.afterLoginAction();
});

const handleSetSidebar = () => {
  configureStore.sidebarVisible = !configureStore.sidebarVisible
  if (configureStore.sidebarVisible) {
    menuTooltip.value = 'Hide'
  } else {
    menuTooltip.value = 'Show'
  }
}

const Logout = () => {
  userStore.logout();
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  position: sticky !important;
}
</style>
