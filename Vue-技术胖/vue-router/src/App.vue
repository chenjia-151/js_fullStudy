<template>
  <div id="app">
    <img src="./assets/logo.png"/><br>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/198/jack website is very good ">params</router-link> |
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/918/I like vue.js">goParams</router-link> |
    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/jack">jack</router-link> |

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    
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
  margin-right: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
