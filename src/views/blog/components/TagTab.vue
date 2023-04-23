<template>
  <v-row class="ma-0" style="height: calc(100vh - 240px)">
    <v-col cols="4" class="pa-0 h-100">
      <MiniList :items="tags"/>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col class="pa-0 h-100">
      chart
    </v-col>
  </v-row>
</template>

<script setup name="TagTab">
import { ref } from 'vue'

import MiniList from './MiniList.vue'

const tags = ref([
  {
    name: 'React',
    related: 9,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Vuetify',
    related: 4,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Node.js',
    related: 5,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'React1',
    related: 9,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Vuetify1',
    related: 4,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Node.js1',
    related: 5,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'React2',
    related: 9,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Vuetify2',
    related: 4,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Node.js2',
    related: 5,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'React3',
    related: 9,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Vuetify3',
    related: 4,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Node.js3',
    related: 5,
    updatedAt: new Date().toLocaleString()
  },
])
</script>

<style lang="scss" scoped>

</style>
