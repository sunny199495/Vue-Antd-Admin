<template>
  <div>
    <model1 :item="item" />
    <model2 :item="item" />
    <model3 :item="item" />
  </div>
</template>

<script>
import Model1 from "./model1";
import Model2 from "./model2";
import Model3 from "./model3";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: { Model1, Model2, Model3 },
};
</script>
