<template>
  <div>
    <p class="text-h5 font-weight-bold pt-3 pb-8">Friends</p>
    <v-row>
      <v-col
        v-for="item in friends"
        :key="item.name"
        cols="12"
        sm="6"
        md="4"
      >
        <FriendCard :item="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script setup name="TabFriends">
import { ref } from 'vue'

import FriendCard from './FriendCard.vue';

const friends = ref([
  {
    name: 'Lucas',
    desc: 'full stack designer full stack designer full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
  {
    name: 'Lucas',
    desc: 'full stack designer',
    avatar: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg',
    link: 'https://leet-blog-admin.vercel.app/'
  },
])
</script>

<style lang="scss" scoped>

</style>
