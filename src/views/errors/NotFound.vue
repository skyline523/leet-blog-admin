<template>
  <v-sheet class="w-100 h-100 d-flex flex-column justify-center align-center">
    <v-img class="mt-16" width="300" height="300" src="@/assets/404.png"></v-img>
    <p class="text-h5 font-weight-bold mt-12">404: Not Found</p>
    <p class="text-subtitle-1">The page you are looking for isn’t here</p>
    <v-btn color="primary" class="mt-3" @click="toDashboard">Back to Dashboard</v-btn>
  </v-sheet>
</template>

<script setup name="NotFound">
import { useRouter } from 'vue-router'

const router = useRouter()

const toDashboard = () => {
  router.replace('/dashboard')
}
</script>

<style lang="scss" scoped>
:deep(.v-img__img) {
  height: 300px
}
:deep(.v-responsive) {
  flex: unset;
}
</style>
