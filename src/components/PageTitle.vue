<template>
  <h1 class="text-h4 mt-3">{{ title }}</h1>
</template>

<script setup name="PageTitle">
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();

const title = ref("");

watchEffect(() => {
  if (route.meta && route.meta.title) {
    title.value = route.meta.title;
  }
});
</script>
