<template>
  <div class="body">
    <div class="header">
      <div class="time">{{ item.templateValue.time }}</div>
      <div class="title">{{ item.templateValue.title.place }}发生{{ item.templateValue.title.levelName }}告警，请尽快处理</div>
      <div class="msgId">{{ item.templateValue.msgId }}</div>
    </div>
    <div class="msg-content">{{ item.templateValue.title.place }}发生{{ item.templateValue.title.levelName }}告警，请尽快处理</div>
    <div></div>
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
  height: 80vh;
  padding: 10px;
  .header {
    display: flex;
    line-height: 30px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #ededed;
    .time {
      border: 1px solid #ededed;
      padding: 0 5px;
      border-radius: 4px;
    }
    .title {
      font-weight: bold;
      margin-left: 20px;
    }
    .msgId {
      position: absolute;
      right: 0;
      border: 1px solid #ededed;
      padding: 0 5px;
      border-radius: 4px;
    }
  }
  .msg-content{
    padding: 10px 0;
  }
}
</style>
