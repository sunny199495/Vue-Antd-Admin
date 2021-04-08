<template>
  <page-layout>
    <a-button type="primary">新增</a-button>
    <a-button type="">编辑</a-button>
    <a-button type="">详情</a-button>
    <a-button type="danger">删除</a-button>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
export default {
  components: { PageLayout },
};
</script>

<style lang="less" scoped>
.ant-btn {
  margin: 10px;
}
</style>
