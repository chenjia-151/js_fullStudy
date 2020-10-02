<template>
  <div id="app">
      <p>{{num}}</p>
      <p class="button"><button @click="add()">+</button></p> |
      <p><button @click="reduce()">-</button></p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:0
        }
    },
    methods:{
        add(){
            this.num++
        },
        reduce(){
            this.num--
        }
    }
}
</script>

<style>

</style>