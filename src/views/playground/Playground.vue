<template>
  <div class="py-4 sandbox-wrapper" color="background" ref="sandbox" style="height: calc(100%)">
    <div class="mb-4 d-flex justify-space-between align-center">
      <v-select
        v-model="language"
        :items="['Vue3', 'Vue2']"
        variant="solo"
        hide-details
        density="compact"
        style="max-width: 100px"
      ></v-select>
      <v-btn
        @click="toggle"
        color="primary"
        density="comfortable"
        :icon="isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
      ></v-btn>
    </div>
    <CodeSandbox :themeMode="theme"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { applyPureReactInVue } from 'veaury'
import { mapState } from 'pinia';
import { useFullscreen } from '@vueuse/core'

import { useConfigureStore } from '@/store/configure';
import CodeSandbox from './components/react_app/CodeSandbox'

export default {
  name: 'Playground',
  components: {
    CodeSandbox: applyPureReactInVue(CodeSandbox),
  },
  data() {
    return {
      language: 'Vue3'
    }
  },
  setup() {
    const sandbox = ref(null)
    const { isFullscreen, toggle } = useFullscreen(sandbox)

    return {
      sandbox,
      isFullscreen,
      toggle
    }
  },
  computed: {
    ...mapState(useConfigureStore, ['theme'])
  },
  methods: {
    handleFullScreen() {
      this.isFullScreen = !this.isFullScreen
    }
  }
}
</script>

<style lang="scss" scoped>
.sandbox-wrapper {
  :deep(.sp-wrapper) {
    height: calc(100% - 72px);
    .sp-layout {
      height: 100%;
    }
  }
}
</style>
