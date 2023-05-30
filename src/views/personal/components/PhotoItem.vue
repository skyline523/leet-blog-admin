<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="rounded-lg"
        style="height: 280px"
      >
        <div class="rounded-lg" >
          <v-img
            :src="photo.urls.regular"
            :lazy-src="photo.urls.regular"
            :height="isHovering ? '280' : '264'"
            :class="isHovering ? 'ma-0' : 'ma-2'"
            cover
            class="rounded-lg transition"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <v-overlay
          :model-value="isHovering"
          contained
          class="align-center justify-center"
        >
          <div style="position: relative; height: 280px" class="w-100 px-6 text-center d-flex flex-column align-center justify-center">
            <div style="position: absolute; top: 8px; right: 8px;">
              <v-btn prepend-icon="mdi-heart-outline" density="comfortable">{{ photo.likes }}</v-btn>
            </div>

            <p class="mb-2 line-clamp-2 text-background">{{ photo.description || photo.alt_description }}</p>
            <v-btn variant="flat">See More Info</v-btn>

            <div style="position: absolute; bottom: 8px;" class="d-flex align-center justify-center">
              <v-btn icon="mdi-download" density="comfortable"></v-btn>
            </div>
          </div>
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup name="PhotoItem">
defineProps({
  photo: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.transition {
  transition: 0.3s
}
</style>
