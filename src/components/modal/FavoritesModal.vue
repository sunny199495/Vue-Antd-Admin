<template>
  <a-modal title="收藏夹" :visible="visible" :footer="null" @cancel="handleCancel" :width="300" :class="['favoritesModal', sideLeft]">
    <a-spin :spinning="spining">123</a-spin>
  </a-modal>
</template>

<script>
export default {
  props: ["visible", "collapsed"],
  components: {},
  data() {
    return {
      left: "80",
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
.favoritesModal {
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
