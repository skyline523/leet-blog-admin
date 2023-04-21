<template>
  <v-layout class="layout bg-background">
    <header class="layout-header text-h6 d-flex align-center">
      Leet Programming
    </header>
    <div class="layout-main">
      <slot />
    </div>
  </v-layout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.layout {
  background-repeat: no-repeat;
  background-position: center top;
  background-image: url(@/assets/login-bg.svg);
  display: flex;
  flex-direction: column;
  height: 100%;
  &-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    height: 64px;
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
  }
  &-main {
    padding: 42px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
}
.v-layout {
  overflow: auto !important;
  height: 100vh;
}
@media screen and (min-width: 1200px) {
  .layout-header {
    max-width: 1200px
  }
}
@media screen and (min-width: 600px) {
  .layout-header {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
