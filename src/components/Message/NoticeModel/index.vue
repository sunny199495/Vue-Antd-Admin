<template>
  <div>
    <model1 :item="item" v-if="item.templateCode == 1" />
    <model2 :item="item" v-else-if="item.templateCode == 2" />
    <model3 :item="item" v-else-if="item.templateCode == 3" />
  </div>
</template>

<script>
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: { Model1, Model2, Model3 },
  created() {
    console.log(this.item);
    if (this.item.templateValue.title.level == 1) return (this.item.templateValue.title.levelName = "一级");
    else if (this.item.templateValue.title.level == 2) return (this.item.templateValue.title.levelName = "二级");
    else if (this.item.templateValue.title.level == 3) return (this.item.templateValue.title.levelName = "三级");
    else if (this.item.templateValue.title.level == 4) return (this.item.templateValue.title.levelName = "四级");
    else return (this.item.templateValue.title.levelName = "五级");
  },
};
</script>
<style lang="less">
@import "index.less";
</style>
