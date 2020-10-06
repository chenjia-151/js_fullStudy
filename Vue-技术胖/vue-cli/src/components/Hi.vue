<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "I am Hi page",
    };
  },
};
</script>

<style>
</style>