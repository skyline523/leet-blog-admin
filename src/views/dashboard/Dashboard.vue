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
    <v-row style="min-height: 400px; max-height: 850px;">
      <v-col class="h-100" cols="12" sm="12" md="12" xl="7">
        <BarChart />
      </v-col>
      <v-col class="h-100" cols="12" sm="12" md="12" xl="5">
        <GithubEvents />
      </v-col>
    </v-row>
    <v-row style="height: 400px">
      <v-col class="h-100" cols="12" sm="6" md="6" xl="4">
        <CategoryList />
      </v-col>
      <v-col class="h-100" cols="12" sm="6" md="6" xl="4">
        <TagList />
      </v-col>
      <!-- <v-col>
        <GithubEvents />
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script setup name="Dashboard">
import { ref } from 'vue'

import Card from './components/Card.vue';
import CategoryList from './components/CategoryList.vue'
import TagList from './components/TagList.vue'
import BarChart from './components/BarChart.vue';
import GithubEvents from './components/GithubEvents.vue';

const dashboardCards = ref([
  { name: 'Posts', count: 12, icon: 'mdi-note-multiple-outline', color: 'success'},
  { name: 'Friend Links', count: 30, icon: 'mdi-vector-link', color: 'primary'},
  { name: 'Comments', count: 121, icon: 'mdi-comment-multiple', color: 'accent'}
])
</script>
