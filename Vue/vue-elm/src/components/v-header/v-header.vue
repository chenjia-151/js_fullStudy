<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <!-- 头像 -->
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt />
      </div>
      <!-- 内容 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <support-ico :size="2" :type="seller.supports[0].type"></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 头部公告 -->
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景图 -->
    <div class="background">
      <img :src="seller.avatar" alt width="100%" height="100%" />
    </div>

    <!-- detail -->
    <header-detail :seller="seller" v-show="detailVisible" @hide="hideDetail"></header-detail>
  </div>
</template>

<script>
import SupportIco from "@/components/support-ico/support-ico";
import HeaderDetail from '@/components/header-detail/header-detail'

export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  data(){
    return {
      detailVisible: false
    }
  },
  
  created() {
    setTimeout(() => {
      console.log(this.seller);
    }, 1000);
  },

  methods:{
    showDetail(){
      this.detailVisible = true
    },
    hideDetail(e){
      // console.log(e);
      this.detailVisible=e
    }
  },

  components: {
    SupportIco,
    HeaderDetail,
  },
};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header {
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;
}

.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 12px 18px 24px;
}

.bulletin-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  background: $color-background-sss;
}

.bulletin-title {
  flex: 0 0 22px;
  width: 22px;
  height: 12px;
  margin-right: 4px;
  bg-image('bulletin');
  background-size: 22px 12px;
  background-repeat: no-repeat;
}

.bulletin-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: $fontsize-small-s;
}

.icon-keyboard_arrow_right {
  flex: 0 0 10px;
  width: 10px;
  font-size: $fontsize-small-s;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}

.avatar {
  flex: 0 0 64px;
  width: 64px;
  margin-right: 16px;
}

.img {
  border-radius: 2px;
}

.content {
  flex: 1;
}

.support-count {
  position: absolute;
  right: 12px;
  bottom: 14px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 14px;
  background: $color-background-sss;
}

.count {
  font-size: $color-background-s;
}

.icon-keyboard_arrow_right {
  margin-left: 2px;
  line-height: 24px;
  font-size: $color-background-s;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.brand {
  width: 30px;
  height: 18px;
  bg-image('brand');
  background-size: 30px 18px;
  background-repeat: no-repeat;
}

.name {
  margin-left: 6px;
  font-size: $fontsize-large;
  font-weight: bold;
}

.description {
  margin-bottom: 8px;
  line-height: 12px;
  font-size: $fontsize-small;
}

.support {
  display: flex;
  align-items: center;
}

.support-ico {
  margin-right: 4px;
}

.text {
  line-height: 12px;
  font-size: $fontsize-small-s;
}
</style>
