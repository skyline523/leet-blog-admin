<template>
  <v-sheet color="background">
    <v-card
      class="rounded-xl d-flex flex-column"
      style="height: 280px"
    >
      <div class="account-bg flex-fill">
        <div class="d-flex align-center avatar">
          <div>
            <v-avatar :size="tabAlign === 'end' ? '124' : '76'">
              <v-img src="https://avatars.githubusercontent.com/u/76251617?v=4"></v-img>
            </v-avatar>
          </div>
          <div>
            <p class="text-h5 font-weight-bold text-white">Leet</p>
            <p class="text-subtitle-2 text-blue-grey-lighten-5">Frontend Developer</p>
          </div>
        </div>
      </div>
      <div class="px-4">
        <v-tabs
          v-resize="onResize"
          v-model="tab"
          color="primary"
          :align-tabs="tabAlign"
        >
          <v-tab
            v-for="item in tabOptions"
            :key="item.value"
            :value="item.value"
          >
            <v-icon start>{{ item.icon }}</v-icon>
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </div>
    </v-card>

    <v-window v-model="tab" class="ma-n3 py-6">
      <v-window-item value="profile" class="pa-3">
        <TabProfile />
      </v-window-item>
      <v-window-item value="friends" class="pa-3">
        <TabFriends />
      </v-window-item>
      <v-window-item value="portfolio" class="pa-3">
        <TabPortfolio />
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script setup name="Account">
import { ref, onMounted } from 'vue'

import TabProfile from './components/TabProfile.vue'
import TabFriends from './components/TabFriends.vue'
import TabPortfolio from './components/TabPortfolio.vue'

const tabOptions = [
  {
    name: 'Profile',
    value: 'profile',
    icon: 'mdi-account-box'
  },
  {
    name: 'Friends',
    value: 'friends',
    icon: 'mdi-account-group'
  },
  {
    name: 'Portfolio',
    value: 'portfolio',
    icon: 'mdi-image-filter-hdr'
  }
]

const tab = ref('profile')
const tabAlign = ref('end')

onMounted(() => {
  onResize()
})

const onResize = () => {
  const windowWith = window.innerWidth
  if (windowWith <= 906) tabAlign.value = 'center'
  else tabAlign.value = 'end'
}
</script>

<style lang="scss" scoped>
.account-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(310deg, rgba(33, 82, 255, 0.6), rgba(33, 212, 253, 0.6)) 50% center / cover,
    url(@/assets/account-bg.jpg) transparent no-repeat;
  background-size: cover;
}
.avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 8px;
}
@media screen and (min-width: 960px) {
  .account-bg {
    position: relative;
  }
  .avatar {
    margin-bottom: -28px;
    position: absolute;
    bottom: 0px;
    left: 40px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    text-align: left;
  }
}
</style>
