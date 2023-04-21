<template>
  <v-row>
    <v-col cols="4">
      <v-card class="rounded-lg pa-4 bg-info">
        <v-card-text class="d-flex flex-column" style="row-gap: 16px;">
          <div
            v-for="item in tags"
            :key="item.name"
            class="w-100 pa-4 d-flex justify-space-between bg-background elevation-1 rounded-lg"
          >
            <div>
              <p class="text-h5 mb-2">{{ item.name }}</p>
              <p>Related Posts: {{ item.related }}</p>
              <p class="text-caption">{{ item.updatedAt }}</p>
            </div>
            <div>
              <v-img
                :width="78"
                aspect-ratio="1"
                cover
                :src="item.icon"
              ></v-img>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-sheet>
        123
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    related: 9,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Vuetify',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
    related: 4,
    updatedAt: new Date().toLocaleString()
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    related: 5,
    updatedAt: new Date().toLocaleString()
  },
])
</script>

<style lang="scss" scoped>

</style>
