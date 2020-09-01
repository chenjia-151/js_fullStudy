<template>
  <div id="app">
    <!-- header  组件 -->
    <v-header></v-header>
    <router-view />
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';

export default {
  components: {
    VHeader,
  },
};
</script>

<style lang="stylus" scoped></style>
