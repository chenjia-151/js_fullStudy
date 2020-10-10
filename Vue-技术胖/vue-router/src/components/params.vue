<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>newsTitle:{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "params pages",
    };
  },
};
</script>

<style>
</style>