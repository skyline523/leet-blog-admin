<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-card class="d-flex justify-center align-cetner rounded-xl py-6">
        <div class="flex-fill d-flex flex-column align-center">
          <p class="text-h4">38</p>
          <p class="text-caption">Friends</p>
        </div>
        <v-divider vertical></v-divider>
        <div class="flex-fill d-flex flex-column align-center">
          <p class="text-h4">4</p>
          <p class="text-caption">Portfolio</p>
        </div>
      </v-card>
      <v-card class="mt-6 rounded-xl px-2 py-1">
        <v-card-title>About</v-card-title>
        <v-card-text>
          <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </v-card-text>
      </v-card>
      <v-card class="mt-6 rounded-xl px-2 py-1">
        <v-card-title>Social</v-card-title>
        <v-card-text class="w-100">
          <div class="d-flex align-center">
            <v-icon>mdi-github</v-icon>
            <span class="ml-3" style="word-break: break-all;">https://github.com/skyline523</span>
          </div>
          <div class="d-flex align-center mt-3">
            <v-icon color="blue">mdi-twitter</v-icon>
            <span class="ml-3" style="word-break: break-all;">https://github.com/skyline523</span>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="9">
      <v-card class="rounded-xl pa-6">
        <v-textarea
          variant="outlined"
          placeholder="Share what you are thinking here..."
        ></v-textarea>
        <div class="d-flex justify-space-between">
          <v-btn variant="tonal">
            <template #prepend>
              <v-icon>mdi-image-area</v-icon>
            </template>
            Image
          </v-btn>
          <v-btn color="primary">Post</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup name="TabProfile">

</script>

<style lang="scss" scoped>

</style>
