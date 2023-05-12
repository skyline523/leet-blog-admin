<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in dashboardCards"
        :key="item.name"
      >
        <Card :item="item"/>
      </v-col>
    </v-row>
    <v-row style="height: 400px">
      <v-col class="h-100" cols="12" sm="12" md="12" xl="6">
        <BarChart />
      </v-col>
      <v-col class="h-100" cols="12" sm="6" md="6" xl="3">
        <CategoryList />
      </v-col>
      <v-col class="h-100" cols="12" sm="6" md="6" xl="3">
        <TagList :items="tags" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup name="Dashboard">
import { ref } from 'vue'

import Card from './components/Card.vue';
import CategoryList from './components/CategoryList.vue'
import TagList from './components/TagList.vue'
import BarChart from './components/BarChart.vue';

const dashboardCards = ref([
  { name: 'Posts', count: 12, icon: 'mdi-note-multiple-outline', color: 'success'},
  { name: 'Friend Links', count: 30, icon: 'mdi-vector-link', color: 'primary'},
  { name: 'Comments', count: 121, icon: 'mdi-comment-multiple', color: 'accent'}
])
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
