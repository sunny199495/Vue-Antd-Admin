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
import { safeLevel } from "@/utils/util";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: { Model1, Model2, Model3 },
  created() {
    this.item.templateValue.title.levelName = safeLevel(this.item);
  },
};
</script>
<style lang="less">
@import "index.less";
</style>
