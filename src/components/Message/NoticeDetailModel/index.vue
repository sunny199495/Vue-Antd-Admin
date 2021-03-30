<template>
  <div>
    <model1 :item="item" v-if="item.templateCode == 1" />
    <model2 :item="item" v-if="item.templateCode == 2" />
  </div>
</template>

<script>
import Model1 from "./Model1";
import Model2 from "./Model2";
import { safeLevel } from "@/utils/util";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: { Model1, Model2 },
  created() {
    this.item.templateValue.title.levelName = safeLevel(this.item);
  },
};
</script>
