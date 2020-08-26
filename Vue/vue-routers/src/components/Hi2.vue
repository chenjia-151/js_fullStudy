<template>
  <div class="hi">
    <p>我是hi2页面</p>
    <button @click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  data(){

  },
  methods:{
    goBack(){
      this.$router.push({name: 'abc', params: {name: '蜗牛'}})
    }
  }
}
</script>

<style>

</style>