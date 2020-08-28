<template>
  <div class="home">
    <div class="address">
      <div class="nav">
        <p class="time">{{localTime}}</p>
        <span class="change-city">切换城市</span>
      </div>
      <div class="city-info">
        <p class="city-name">{{mapData.city}}</p>
        <p class="city-weather">{{mapData.weather}}</p>
        <h1 class="city-temp">{{mapData.temperature}}°C</h1>
        <p class="weather-detail">
          <span>风力：{{mapData.windPower}}</span> |
          <span>风向：{{mapData.windDirection}}</span> |
          <span>空气湿度：{{mapData.humidity}}%</span>
        </p>
      </div>
    </div>
    <div class="feature">
      <div class="group" v-if="mapFeatureMapData.length > 0">
        明日：
        <span class="tm">白天 : {{mapFeatureMapData[1].dayTemp}} {{mapFeatureMapData[1].dayWeather}} {{mapFeatureMapData[1].dayWindDir}} {{mapFeatureMapData[1].dayWindPower}}</span>
        <span class="tm">夜间 : 大雨</span>
      </div>
      <div class="group">
        后天：
        <span class="tm">白天 : 多云</span>
        <span class="tm">夜间 : 大雨</span>
      </div>
    </div>
    <!-- 取DOM结构  用 ref  -->
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      mapFeatureMapData: []
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
  },
  mounted() {
    // 在js中取出这个DOM结构
    // console.log(this.$refs.mapContainer);
    this.initMap();
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      let _self = this;
      let map = new AMap.Map(_self.$refs.mapContainer, {
        resizeEnable: true,
      });
      AMap.plugin("AMap.CitySearch", function () {
        let citySearch = new AMap.CitySearch();
        // console.log(citySearch)
        citySearch.getLocalCity(function (status, result) {
          // console.log(status,result);
          if (status === "complete" && result.info === "OK") {
            // 获取位置信息成功
            // 获取当前城市天气的信息
            _self.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _self = this;
      //加载天气查询插件
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          // console.log(err, data);
          _self.mapData = data;
        });
        // 执行未来天气信息查询
        weather.getForecast(cityName,function(err,data){
          // console.log(data);
          _self.mapFeatureMapData = data.forecasts
        })
      });
    },
  },
};
</script>

<style scoped>
.home {
  padding: 10px;
  height: 100vh;
  box-sizing: border-box;
  background: #000;
  opacity: 0.7;
  color: #fff;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.city-info {
  text-align: center;
  margin: 20px 0;
  line-height: 2;
}
.city-temp {
  font-size: 40px;
}
.feature {
  width: 100%;
}
.feature .group {
  height: 44px;
  line-height: 44px;
  background-color: rgba(255, 255, 255, 0.26);
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 10px;
}
.group .tm {
  margin-right: 20px;
}
</style>