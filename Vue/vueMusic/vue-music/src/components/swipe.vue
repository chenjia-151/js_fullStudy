<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in pictures" :key="index">
        <img style="width:100%;height:160px" :src="item.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      pictures: []
    };
  },
  methods:{
    fetchResult(){
      api.MusicRankDetail().then((res)=>{
        // console.log(res);
        this.pictures = res.banners
      })
    }
  },
  created(){
    this.fetchResult()
  }

};
</script>

<style>

</style>