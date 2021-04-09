<template>
  <div></div>
</template>

<script>
export default {
  props: ["isFirst", "isSwitch", "isRefresh", "isClose", "currentPagePath"],
  created() {
    this.pagePath = this.currentPagePath || this.$route.fullPath;
  },
  watch: {
    isFirst(val) {
      if (val) {
        this.pageChange();
        console.log(`初次进入页面：${this.pagePath}，初次进入时间：${this.$currentTime()}`);
      }
    },
    isSwitch(val) {
      if (val) {
        this.pageChange();
        console.log(`离开页面：${this.pagePath}，离开时间：${this.$currentTime()}`);
        console.log(`进入页面：${this.currentPagePath}，进入时间：${this.$currentTime()}`);
        this.pagePath = this.currentPagePath;
      }
    },
    isRefresh(val) {
      if (val) {
        this.pageChange();
        console.log(`刷新页面：${this.pagePath}，刷新时间：${this.$currentTime()}`);
      }
    },
    isClose(val) {
      if (val) {
        this.pageChange();
        console.log(`关闭页面：${this.pagePath},关闭时间：${this.$currentTime()}`);
      }
    },
  },
  methods: {
    pageChange() {
      this.$emit("pageChange", false);
    },
  },
};
</script>
