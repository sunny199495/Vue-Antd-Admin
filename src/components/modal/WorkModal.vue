<template>
  <a-modal :closable="false" :visible="visible" :footer="null" @cancel="handleCancel" :width="300" :class="['WorkModal', sideLeft]">
    <div>123</div>
  </a-modal>
</template>

<script>
export default {
  props: ["visible", "collapsed"],
  data() {
    return {
      left: "80",
      list: [
        { modelId: 1, title: "11111", content: "111111" },
        { modelId: 2, title: "22222", content: "222222" },
      ],
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
.WorkModal {
  .ant-modal {
    position: absolute;
    left: 80px;
    top: 50px;
    .ant-modal-body {
      padding: 10px;
    }
  }
}
.sideLeft {
  .ant-modal {
    left: 200px;
  }
}
</style>
