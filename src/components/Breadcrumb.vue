<template>
  <v-breadcrumbs
    v-if="breadcrumbs.length > 0"
    :items="breadcrumbs"
    class="ml-n3"
  >
    <!-- <template v-slot:prepend>
      <v-icon size="small" icon="mdi-vuetify" color="blue"></v-icon>
    </template> -->
  </v-breadcrumbs>
</template>

<script setup>
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();

const breadcrumbs = ref([]);

watchEffect(() => {
  // if you go to the redirect page, do not update the breadcrumbs
  //   if (route.path.startsWith('/redirect/')) {
  //     return
  //   }
  if (route.meta && route.meta.title) {
    breadcrumbs.value = [
      {
        title: route.meta.category,
        disabled: false,
      },
      { title: route.meta.title, disabled: true },
    ];
  } else {
    breadcrumbs.value = [];
  }
});
</script>
