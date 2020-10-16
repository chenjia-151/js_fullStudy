<template>
  <div>
    <!-- 轮播图 -->
    <v-swipe></v-swipe>

    <h1 class="hotRank">热门歌单推荐</h1>

    
  </div>
</template>

<script>
import swipe from "@/components/swipe"
export default {
  data() {
    return {}
  },
  methods:{},
  components:{
    'v-swipe': swipe
  }
};
</script>

<style lang='stylus' scoped>
@import "../assets/css/function.styl"
.hotRank
  color #ca2349
  width 100%
  height px2rem(100px)
  line-height px2rem(100px)
  text-align center
  align-items center
</style>