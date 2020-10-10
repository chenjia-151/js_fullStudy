<template>
  <div id="app">
    <img src="./assets/logo.png"/><br>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/198/jack website is very good ">params</router-link> |
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/918/I like vue.js">goParams</router-link> |
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
