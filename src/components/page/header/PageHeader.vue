<template>
  <div id="page-header">
    <div :class="['page-header', layout, pageWidth]">
      <div class="page-header-wide">
        <img class="img" src="https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg" />
        <div class="breadcrumb">
          <a-breadcrumb>
            <span :key="index" v-for="(item, index) in breadcrumb.breadcrumbs">
              <a-breadcrumb-item separator=">" v-if="item.children.length == 1">
                <span>{{ item.children[0].name }}</span>
              </a-breadcrumb-item>
              <a-breadcrumb-item separator=">" v-else>
                <span>{{ item.children[0].name }}</span>
                <a-menu slot="overlay">
                  <a-menu-item v-for="(ite, inde) in item.children" :key="inde">
                    <span>{{ ite.name }}</span>
                  </a-menu-item>
                </a-menu>
              </a-breadcrumb-item>
            </span>
          </a-breadcrumb>
        </div>
        <div class="tabs">
          <div class="tab" :class="tabActive.id == item.id ? 'tabActive' : ''" v-for="(item, index) in breadcrumb.tabList" :key="index" @click="tabChange(item)">{{ item.value }}</div>
        </div>
        <div class="setting">
          <a-icon type="setting" />
          <span>应用配置</span>
        </div>
      </div>
    </div>
    <point-page v-if="isDebug" :isFirst="isFirst" @pageChange="pageChange" />
  </div>
</template>

<script>
import PointPage from "../../buriedPoint/PointPage";
import { mapState } from "vuex";
import { GetBreadcrumbs } from "@/api/mock";
export default {
  name: "PageHeader",
  components: { PointPage },
  props: {
    title: {
      type: [String, Boolean],
      required: false,
    },
    logo: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      tabActive: {},
      isFirst: false,
      isDebug: false,
      breadcrumb: {},
    };
  },
  computed: {
    ...mapState("setting", ["layout", "showPageTitle", "pageWidth"]),
  },
  watch: {
    $route(val) {
      this.getBreadcrumbs(val.fullPath);
    },
  },
  created() {
    this.getBreadcrumbs(this.$route.fullPath);
    if (this.$ls.get("isDebug")) {
      this.isDebug = this.$ls.get("isDebug").isDebug;
      setTimeout(() => {
        this.isFirst = true;
      }, 1);
    }
  },
  methods: {
    tabChange(item) {
      this.tabActive = item;
      // this.isFirst = true;
    },
    pageChange(val) {
      this.isFirst = val;
    },
    async getBreadcrumbs() {
      const data = {
        name: this.$route.name,
      };
      const res = await GetBreadcrumbs(data);
      if (res.data.code == 200) {
        this.breadcrumb = res.data.data;
        this.tabActive = this.breadcrumb.tabList[0];
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
