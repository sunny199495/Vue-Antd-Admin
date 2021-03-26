<template>
  <div v-if="item.modelId == 2">
    <a-list-item-meta :title="item.title" :description="item.content">
      <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />
    </a-list-item-meta>
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
.ant-list-item-meta {
  .ant-list-item-meta-title,
  .ant-list-item-meta-description {
    color: @warning-color;
  }
}
</style>
