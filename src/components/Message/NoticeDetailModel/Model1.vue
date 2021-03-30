<template>
  <div class="body">
    <div class="header">
      <div>{{ item.time }}</div>
      <div>{{ item.title.place }}</div>
      <div>{{ item.msgId }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  background: @body-background;
  height: 100%;
}
.header {
  display: flex;
}
</style>
