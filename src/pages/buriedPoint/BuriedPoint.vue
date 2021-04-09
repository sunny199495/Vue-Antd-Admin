<template>
  <page-layout>
    <a-button type="primary" @click="add"><point-button :addButton="addButton" @change="change" />新增</a-button>
    <a-button type="" @click="edit"><point-button :editButton="editButton" @change="change" />编辑</a-button>
    <a-button type="" @click="detail"><point-button :detailButton="detailButton" @change="change" />详情</a-button>
    <a-button type="danger" @click="del"><point-button :delButton="delButton" @change="change" />删除</a-button>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
import PointButton from "@/components/buriedPoint/PointButton";
export default {
  components: { PageLayout, PointButton },
  data() {
    return {
      addButton: false,
      editButton: false,
      detailButton: false,
      delButton: false,
    };
  },
  methods: {
    change() {
      this.addButton = false;
      this.editButton = false;
      this.detailButton = false;
      this.delButton = false;
    },
    add() {
      this.addButton = true;
    },
    edit() {
      this.editButton = true;
    },
    detail() {
      this.detailButton = true;
    },
    del() {
      this.delButton = true;
    },
  },
};
</script>

<style lang="less" scoped>
.ant-btn {
  margin: 10px;
}
</style>
