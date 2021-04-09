<template>
  <div></div>
</template>

<script>
import { time } from "../../utils/util";
export default {
  props: ["isFirst", "isSwitch", "isRefresh", "isClose", "currentPagePath"],
  created() {
    this.pagePath = this.currentPagePath || this.$route.fullPath;
  },
  watch: {
    isFirst(val) {
      if (val) {
        this.pageChange();
        console.log(`初次进入页面：${this.pagePath},初次进入时间：${time()}`);
      }
    },
    isSwitch(val) {
      if (val) {
        this.pageChange();
        console.log(`离开页面：${this.pagePath},离开时间：${time()}`);
        console.log(`进入页面：${this.currentPagePath},进入时间：${time()}`);
        this.pagePath = this.currentPagePath;
      }
    },
    isRefresh(val) {
      if (val) {
        this.pageChange();
        console.log(`刷新页面：${this.pagePath},刷新时间：${time()}`);
      }
    },
    isClose(val) {
      if (val) {
        this.pageChange();
        this.pageCloseTime = new Date().getTime();
        console.log(`关闭页面：${this.pagePath},关闭时间：${new Date().getTime()}`);
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
