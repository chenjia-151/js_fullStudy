<template>
  <div id="app">
    <h2>{{ msg }}-{{ $route.params.username }}-{{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "I am Hi1 page",
    };
  },
};
</script>

<style>
</style>