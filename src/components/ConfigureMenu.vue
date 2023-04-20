<template>
  <div>
    <div class="drawer-button">
      <v-tooltip
        text="Config"
        location="top"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="primary" icon="mdi-tune-variant" @click="drawer = true"></v-btn>
        </template>
      </v-tooltip>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="440"
      :elevation="theme.global.current.value.dark ? 0 : 24"
    >
      <div class="px-6 pt-4 d-flex justify-space-between align-center">
        <div class="text-h6">App Setting</div>
        <v-btn variant="text" density="comfortable" icon="mdi-close" @click="drawer = false"></v-btn>
      </div>

      <div class="pa-6">
        <div>
          <div class="text-subtitle-2 text-text">COLOR SCHEMA</div>
          <div>
            <v-chip-group selected-class="chip-active" v-model="themeMode">
              <v-chip value="lightTheme">
                <v-icon start icon="mdi-weather-sunny"></v-icon>
                Light
              </v-chip>
              <v-chip value="darkTheme">
                <v-icon start icon="mdi-weather-night"></v-icon>
                Dark
              </v-chip>
            </v-chip-group>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup name="ConfigureMenu">
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs';

import { useConfigureStore } from '@/store/configure'

const theme = useTheme()
const configureStore = useConfigureStore()

const drawer = ref(null)
const themeMode = ref(configureStore.theme)

watch(themeMode, (val) => {
  theme.global.name.value = val
  configureStore.theme = val
})
</script>

<style lang="scss" scoped>
.drawer-button {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 999;
}
.chip-active {
  border: 2px solid #2970FF;
}
:deep(.v-navigation-drawer__scrim) {
  opacity: 0.01;
}
:deep(.v-navigation-drawer) {
  border: none;
}
</style>
