<template>
  <a-modal title="消息中心" :visible="visible" :footer="null" @cancel="handleCancel" :width="300" :class="['messageModal', sideLeft]">
    <a-spin :spinning="spining">
      <a-list class="list">
        <a-list-item v-for="(item, index) in list" :key="index" class="list-item">
          <list-model :item="item" />
        </a-list-item>
      </a-list>
    </a-spin>
  </a-modal>
</template>

<script>
import ListModel from "../Message/ListModel";
export default {
  props: ["visible", "collapsed"],
  components: { ListModel },
  data() {
    return {
      ModalText: "ModalText",
      left: "80",
      list: [
        { modelId: 1, title: "11111", content: "111111" },
        { modelId: 2, title: "22222", content: "222222" },
        { modelId: 3, title: "33333", content: "333333" },
        { modelId: 3, title: "44444", content: "444444" },
        { modelId: 2, title: "55555", content: "555555" },
        { modelId: 1, title: "66666", content: "666666" },
      ],
      count: 0,
      spining: true,
    };
  },
  computed: {
    sideLeft() {
      return this.collapsed ? "" : "sideLeft";
    },
  },
  watch: {
    visible(val) {
      this.modalVisible = val;
      this.spining = false;
    },
    collapsed(val) {
      if (val) {
        this.left = "80";
      } else {
        this.left = "200";
      }
    },
  },
  methods: {
    handleCancel() {
      this.modalVisible = false;
      this.$emit("visibleChange", this.modalVisible);
    },
  },
};
</script>
<style lang="less">
.messageModal {
  .ant-modal {
    position: absolute;
    left: 80px;
    top: 0;
    .ant-modal-body {
      padding: 10px;
    }
    .ant-modal-content {
      height: 100vh;
    }
  }
}
.sideLeft {
  .ant-modal {
    left: 200px;
  }
}
</style>
