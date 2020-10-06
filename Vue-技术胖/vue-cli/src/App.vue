<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link to="/hi/hi1">Hi页面hi1</router-link> |
      <router-link to="/hi/hi2">Hi页面hi2</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
