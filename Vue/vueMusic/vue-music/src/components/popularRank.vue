<template>
  <div class="list">
    <ul>
      <li class="item" v-for="(item, index) in playList" :key="index">
        <div class="image">
          <img
            :src="item.coverImgUrl"
            style="width: 60px; height: 60px"
            alt=""
          />
        </div>
        <div class="text">
          <h2 class="name">{{ item.name }}</h2>
          <p class="desc">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      playList: [],
    };
  },
  methods: {
    fetchResult() {
      api.popularMusic().then((res) => {
        // console.log(res);
        this.playList = res.playlists;
      });
    },
  },
  created() {
    this.fetchResult();
  },
};
</script>

<style lang='stylus' scoped>
@import "../assets/css/function.styl"
.list
    width 100%
    position fixed
    height px2rem(160px)
    background-color #201d4d
    .item
        display flex
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        align-items center
        .image
            flex 0 0 px2rem(50px)
            padding-right px2rem(40px)
        .text
            align-items center
            .name
                color #fff
                margin-bottom px2rem(10px)
                text-overflow ellipsis
                overflow hidden
                display -webkit-box
                -webkit-line-clamp 1;
                -webkit-box-orient vertical;
                word-break break-all
                letter-spacing px2rem(4px)
                
            .desc
                height px2rem(70px)
                line-height px2rem(38px)
                color hsla(0,0%,100%,.3)
                font-size px2rem(28px)
                text-overflow ellipsis
                overflow hidden
                display -webkit-box
                -webkit-line-clamp 2;
                -webkit-box-orient vertical;
                word-break break-all
                letter-spacing px2rem(3px)
</style>

