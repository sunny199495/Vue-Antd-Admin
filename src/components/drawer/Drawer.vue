<template>
  <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visibleStatus" :after-visible-change="afterVisibleChange" @close="onClose">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      visibleStatus: false,
    };
  },
  watch: {
    visible(val) {
      this.visibleStatus = val;
    },
  },
  methods: {
    afterVisibleChange(val) {
      this.$emit("visibleChange", val);
    },
    onClose() {
      this.visibleStatus = false;
    },
  },
};
</script>
