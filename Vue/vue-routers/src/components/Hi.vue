<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name: 'hi1',params:{name: '张三'}}">h1 一</router-link>
      <span style="display:inline-block;width: 100px" ></span>
      <router-link to="/hi/hi2">h1 二</router-link>
      <span style="display:inline-block;width: 100px" ></span>
      <router-link to="/abc">404</router-link>
      <div>
          {{$route.params.name}}
      </div>

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
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log('准备进入目标页面');
        next()
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log('准备离开目标页面');
        next()
    }
}
</script>


<style>

</style>