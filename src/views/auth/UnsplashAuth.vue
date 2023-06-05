<template>
  <div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const redirect_uri = 'http://localhost:3000/auth/unsplash-redirect' // 本地测试uri
  const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${redirect_uri}&response_type=code&scope=public+write_likes+read_photos`

  window.location.href = authUrl
})
</script>

<style lang="scss" scoped>

</style>
