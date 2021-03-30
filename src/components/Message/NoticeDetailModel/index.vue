<template>
  <div>
    <model1 :item="item" />
  </div>
</template>

<script>
import Model1 from "./Model1";

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: { Model1 },
};
</script>
