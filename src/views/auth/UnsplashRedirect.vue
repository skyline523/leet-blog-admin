<template>
  <div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  if (route.query.code) {
    const code = route.query.code
    console.log(route.query)

    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    const SECRET_KEY = import.meta.env.VITE_UNSPLASH_SECRET_KEY
    const redirect_uri = 'http://localhost:3000/auth/unsplash-redirect' // 本地测试uri
    const tokenUrl = 'https://unsplash.com/oauth/token'

    axios.post(tokenUrl, {
      client_id: ACCESS_KEY,
      client_secret: SECRET_KEY,
      redirect_uri,
      code,
      grant_type: 'authorization_code'
    }).then(res => {
      if (res.status === 200) {
        userStore.setUnsplashToken(res.data.access_token)
        router.replace('/personal/unsplash')
      }
    }).catch(() => {})
  }
})
</script>

<style lang="scss" scoped>

</style>
