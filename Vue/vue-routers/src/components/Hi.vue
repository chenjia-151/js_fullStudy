<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name: 'hi1',data:{name: '张三'}}">h1 一</router-link>
      <span style="display:inline-block;width: 100px" ></span>
      <router-link to="/hi/hi2">h1 二</router-link>

      <router-view></router-view>
  </div>
</template>


<script>
export default {
    name: 'Hi',

    // 统一将data数据写成一个函数l，返回一个对象
    data(){
        return {
            msg: 'Hi, I am wn'
        }
    }
}
</script>


<style>

</style>