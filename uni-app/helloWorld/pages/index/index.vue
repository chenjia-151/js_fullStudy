<template>
  <view class="content">
    <view>{{ a }}</view>
    <image @tap="goTest" class="logo" src="/static/logo.png"></image>
    <logo />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
		<view class="flex">
      <checkbox
        class="checkbox"
        :checked="hideZero"
        @tap="handleHideZero"
        color="#343a45"
      ></checkbox>
      <view>隐藏为0的资产</view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
import logo from "../../components/logo";
export default {
  components: {
    logo,
  },
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  computed: {
    ...mapState(["a"]),
  },
  methods: {
    goTest() {
      uni.navigateTo({
        url: "/pages/home/phone",
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
