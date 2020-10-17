<template>
  <v-scroll>
    <div class="rank">
      <div
        class="ranklist"
        v-for="(item, index) in rankMusic.slice(0, 4)"
        :key="index"
      >
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
              <li class="song" v-for="(rol, i) in item.tracks" :key="i">
                <span>{{ rol.first }}-{{ rol.second }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        class="ranklist"
        v-for="(item, index) in rankMusic.slice(4)"
        :key="index"
      >
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
              <li class="song title">
                <span>{{ item.name }}</span>
              </li>
              <li class="song update">
                <span>{{ item.updateFrequency }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </v-scroll>
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
        // console.log(res);
        this.rankMusic = res.list;
      });
    },
  },
  created() {
    this.fetchResult();
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.rank
  width 100%
  height 100%
  position fixed
  z-index -1
  top px2rem(180px)
  bottom 0
  box-sizing border-box

  .ranklist
      box-sizing border-box
      margin 0 px2rem(20px) px2rem(20px) px2rem(20px)
      display flex
      height px2rem(238px)
      background-color #5430b4
      border-radius px2rem(20px)
      .item
          width 100%
          box-sizing border-box
          padding px2rem(20px)
          display flex
          justify-content space-between
          .img
              flex 1
              width px2rem(100px)
              height px2rem(100px)
              border-radius px2rem(20px)
          .songlist
              display flex
              flex-direction column
              box-sizing border-box
              margin-left px2rem(20px)
              .song
                  overflow hidden
                  box-sizing border-box
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
                  font-size px2rem(38px)
                  margin-top px2rem(35px)
              .update
                  font-size px2rem(30px)
                  margin-top px2rem(30px)
    
</style>
