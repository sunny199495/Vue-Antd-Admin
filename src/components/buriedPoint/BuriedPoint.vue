<template>
  <div></div>
</template>

<script>
export default {
  props: ["isSwitch", "isRefresh", "isClose", "currentPagePath"],
  created() {
    this.pagePath = this.currentPagePath || this.$route.fullPath;
  },
  watch: {
    isSwitch(val) {
      if (val) {
        this.$emit("pageChange", false);
        console.log(`离开页面：${this.pagePath},离开时间：${new Date().getTime()}`);
        console.log(`进入页面：${this.currentPagePath},进入时间：${new Date().getTime()}`);
        this.pagePath = this.currentPagePath;
      }
    },
    isRefresh(val) {
      if (val) {
        this.$emit("pageChange", false);
        console.log(`刷新页面：${this.currentPagePath},刷新时间：${new Date().getTime()}`);
      }
    },
    isClose(val) {
      if (val) {
        this.$emit("pageChange", false);
        this.pageCloseTime = new Date().getTime();
        console.log(`关闭页面：${this.currentPagePath},关闭时间：${new Date().getTime()}`);
      }
    },
  },
};
</script>
