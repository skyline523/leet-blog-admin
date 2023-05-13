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
    >
      <div class="px-6 pt-4 d-flex justify-space-between align-center">
        <div class="text-h6">App Setting</div>
        <v-btn variant="text" density="comfortable" icon="mdi-close" @click="drawer = false"></v-btn>
      </div>

      <div class="pa-6">
        <div>
          <div class="text-subtitle-2 text-text">COLOR SCHEMA</div>
          <div>
            <v-chip-group selected-class="checked" v-model="themeMode">
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
        <div class="mt-8">
          <div class="text-subtitle-2 text-text">CONTENT</div>
          <div>
            <v-item-group v-model="contentMode" selected-class="checked">
              <div class="d-flex mt-2" style="column-gap: 8px;">
                <v-item value="compact" v-slot="{ selectedClass, toggle }">
                  <div class="d-flex flex-column align-center">
                    <div class="pa-2 content-btn cursor-pointer" :class="selectedClass" @click="toggle">
                      <div class="content-compact bg-info"></div>
                      <div class="content-compact bg-info"></div>
                    </div>
                    <p class="mt-2 text-subtitle-2">Compact</p>
                  </div>
                </v-item>
                <v-item value="wide" v-slot="{ selectedClass, toggle }">
                  <div class="d-flex flex-column align-center">
                    <div class="pa-2 content-btn cursor-pointer" :class="selectedClass" @click="toggle">
                      <div class="content-wide bg-info"></div>
                      <div class="content-wide bg-info"></div>
                    </div>
                    <p class="mt-2 text-subtitle-2">Wide</p>
                  </div>
                </v-item>
              </div>
            </v-item-group>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup name="ConfigureMenu">
import { ref, watchEffect } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs';

import { useConfigureStore } from '@/store/configure'

const theme = useTheme()
const configureStore = useConfigureStore()

const drawer = ref(null)
const themeMode = ref(configureStore.theme)
const contentMode = ref(configureStore.content)

// watch(themeMode, (val) => {
//   theme.global.name.value = val
//   configureStore.theme = val
// })
watchEffect(() => {
  theme.global.name.value = themeMode.value
  configureStore.theme = themeMode.value
  configureStore.content = contentMode.value
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.drawer-button {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 999;
}

.checked {
  border: 2px solid #2970FF !important;
}

.content-btn {
  width: 136px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(var(--v-theme-border));
  border-radius: 8px;
}

.content-compact {
  margin: 0 2px;
  width: 40px;
  height: 44px;
  border-radius: 8px;
  border: 1px dashed rgb(210, 214, 219);
}

.content-wide {
  margin: 0 2px;
  width: 58px;
  height: 44px;
  border-radius: 8px;
  border: 1px dashed rgb(210, 214, 219);
}

:deep(.v-navigation-drawer__scrim) {
  opacity: 0.01;
}
:deep(.v-navigation-drawer) {
  border: none;
}
</style>
