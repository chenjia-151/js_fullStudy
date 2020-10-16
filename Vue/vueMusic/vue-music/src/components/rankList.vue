<template>
  <div class="rank">
    <v-scroll>
      <div class="ranklist" v-for="(item, index) in rankMusic" :key="index">
        <ul>
          <li class="item purple">
            <div class="img">
              <img
                :src="item.coverImgUrl"
                style="width: 100px; height: 100px; border-radius: 10px"
                alt=""
              />
            </div>
            <ul class="songlist">
              <li class="song">
                <span>1 熬夜-摩登兄弟</span>
              </li>
              <li class="song">
                <span>2 声声慢-张一山</span>
              </li>
              <li class="song">
                <span>3 沉醉的青丝-林宝磬</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="ranklist">
        <ul>
          <li class="item purple">
            <div class="img">
              <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3009849830,2271155855&fm=26&gp=0.jpg"
                style="width: 100px; height: 100px; border-radius: 10px"
                alt=""
              />
            </div>
            <ul class="songlist">
              <li class="song title">
                <span>新说唱热歌榜</span>
              </li>
              <li class="song update">
                <span>每周一更新</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </v-scroll>
  </div>
</template>

<script>
import scroll from "@/components/scroll";
import api from "@/api";

export default {
  data() {
    return {
      rankMusic: [],
    };
  },

  components: {
    "v-scroll": scroll,
  },

  methods: {
    fetchResult() {
      api.MusicRank().then((res) => {
        console.log(res);
        this.rankMusic = res.list
      });
    }
  },
  created(){
    this.fetchResult()
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.rank
    width 100%
    height 100%
    position fixed
    top px2rem(180px)
    bottom 0
    .ranklist
        margin 0 px2rem(20px) px2rem(20px) px2rem(20px)
        display flex
        height px2rem(238px)
        background-color #5430b4
        border-radius px2rem(20px)
        .item
            padding px2rem(20px)
            display flex
            justify-content space-between
            .img
                flex 1
                width px2rem(100px)
                height px2rem(100px)
                border-radius px2rem(20px)
            .songlist
                flex auto
                display flex
                flex-direction column
                margin-left px2rem(20px)
                .song
                    overflow hidden
                    width px2rem(500px)
                    align-items center
                    margin px2rem(18px)
                    padding-left px2rem(100px)
                    white-space nowrap
                    text-overflow ellipsis
                    font-size px2rem(25px)
                    font-weight normal
                    padding-right px2rem(50px)
                .title
                    font-size px2rem(44px)
                    margin-top px2rem(35px)
                .update
                    font-size px2rem(35px)
</style>
