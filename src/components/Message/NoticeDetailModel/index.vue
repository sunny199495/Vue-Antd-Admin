<template>
  <div>
    <model1 :item="item" />
  </div>
</template>

<script>
import Model1 from "./Model1";
import { safeLevel } from "@/utils/util";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: { Model1 },
  created() {
    this.item.templateValue.title.levelName = safeLevel(this.item);
  },
};
</script>
