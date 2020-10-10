<template>
  <div id="app">
    <img src="./assets/logo.png" /><br />
    <div id="id">
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/198/jack website is very good ">params</router-link> | 
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/918/I like vue.js">goParams</router-link> |
    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/jack">jack</router-link> |
    <router-link to="/21121">错误</router-link> |

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    goBack() {
      this.$router.go(-1);  // 后退一个页面
    },
    goGo(){
      this.$router.go(1)  // 前进一个页面
    },
    goHome(){
      this.$router.push('/') // 可以直接选择跳转到某个页面
    }
  },
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
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
