<template>
  <div class="clild2">
      child2 {{msg}}
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
    data(){
        return {
            msg: ''
        }
    },
    created(){
        bus.$on('info', (val)=>{      //  $on  接收数据   与  $emit发散数据   一起使用
            console.log(val);
            this.msg = val
        })          
    }
}
</script>

<style>

</style>