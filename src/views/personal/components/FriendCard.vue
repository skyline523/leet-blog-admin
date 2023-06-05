<template>
  <v-card class="rounded-xl d-flex flex-column justify-center align-center pt-8 pb-6" style="position: relative;">
    <v-avatar size="68" rounded="rounded-circle">
      <v-img
        :src="item.avatar"
        :lazy-src="item.avatar"
      ></v-img>
    </v-avatar>
    <p class="text-subtitle-2 mt-4">{{ item.name }}</p>
    <p class="text-caption flex-fill text-center d-flex align-center" style="max-width: 220px; height: 40px">{{ item.desc }}</p>
    <v-tooltip
      text="Open Link"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-link" variant="text" class="mt-1" density="comfortable"></v-btn>
      </template>
    </v-tooltip>

    <div class="card-action">
      <v-menu location="start">
        <template #activator="{ props }">
          <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" density="comfortable"></v-btn>
        </template>

        <v-list class="rounded-lg dark-shadow py-0" density="compact" color="surface" width="120">
          <v-list-item value="edit" class="rounded-lg ma-2 px-1">
            <template #prepend>
              <v-icon icon="mdi-pencil" class="mr-2"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1">Edit</v-list-item-title>
          </v-list-item>
          <v-list-item value="delete" class="rounded-lg ma-2 px-1" >
            <template #prepend>
              <v-icon color="error" icon="mdi-trash-can-outline" class="mr-2"></v-icon>
            </template>
            <v-list-item-title class="text-subtitle-1 text-error">Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-card>
</template>

<script setup name="FriendCard">
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.card-action {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
