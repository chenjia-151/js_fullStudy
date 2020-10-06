<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link
        :to="{ name: 'hi1', params: { username: 'jack', id: '666' } }"
        >Hi页面hi1</router-link
      >
      |
      <router-link to="/hi/hi2">Hi页面hi2</router-link>
    </div>

    <p>{{ $route.name }}</p>

    <router-view></router-view>
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
