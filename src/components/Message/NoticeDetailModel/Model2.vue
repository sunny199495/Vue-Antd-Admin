<template>
  <div class="body">
    <div class="header">
      <div class="time">{{ item.templateValue.time }}</div>
      <div class="title">{{ item.templateValue.title.place }}发生{{ item.templateValue.title.levelName }}告警，请尽快处理</div>
      <div class="msgId">{{ item.templateValue.msgId }}</div>
    </div>
    <div class="msg-content">{{ item.templateValue.body.value }}</div>
    <div class="p-map">
      <div class="text">所在位置</div>
      <div id="mapContainer"><!--渲染地图的div--></div>
    </div>
    <div class="img">
      <div class="text">相关图片</div>
      <div>
        <img v-for="(item, index) in imgList" :key="index" :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
import MapLoader from "@/utils/amap"; //引入刚刚新建的amap.js
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      imgList: [],
    };
  },
  created() {
    this.img();
    this.loadMap();
  },
  methods: {
    img() {
      this.imgList = this.item.templateValue.body.picture.split(",");
    },
    loadMap() {
      MapLoader().then(
        (AMap) => {
          this.map = new AMap.Map("mapContainer", {
            center: this.item.templateValue.body.map.split(","),
            zoom: 30,
          });
          //map初始化插件
          AMap.plugin(["AMap.ToolBar"], () => {
            this.map.addControl(new AMap.ToolBar());
          });
        },
        (e) => {
          console.log("地图加载失败", e);
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  background: @body-background;
  height: 80vh;
  padding: 10px;
  .header {
    line-height: 30px;
    text-align: center;
    border-bottom: 1px solid #ededed;
  }
  .msg-content {
    padding: 15px 0;
  }
  .text {
    font-size: 12px;
    padding: 10px 0;
    color: @text-color-secondary;
  }
  .p-map {
    #mapContainer {
      height: 30vh;
    }
  }
  .img {
    img {
      width: 200px;
      margin: 0 20px 20px 0;
      border-radius: 10px;
    }
  }
}
</style>
