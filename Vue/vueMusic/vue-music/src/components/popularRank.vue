<template>
  <v-scroll class="scroll" :pullup="pullup">
    <div class="list">
    <ul class="list-item">
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
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from "@/api";
export default {
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      playList: [],
      pullup: true
    };
  },
  components:{
    'v-scroll': scroll
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
.scroll
  height 100%
  overflow hidden
  .list
    width 100% 
    height 100%
    position fixed
    z-index -1
    // box-sizing border-box
    top px2rem(600px)
    .list-item
      background-color #9b9b9b
      // box-sizing border-box
      .item
        // box-sizing border-box
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

