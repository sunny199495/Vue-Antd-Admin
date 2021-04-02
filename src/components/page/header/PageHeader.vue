<template>
  <div id="page-header">
    <div :class="['page-header', layout, pageWidth]">
      <div class="page-header-wide">
        <img class="img" src="https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg" />
        <div class="breadcrumb">
          <a-breadcrumb separator=">">
            <a-breadcrumb-item :key="index" v-for="(item, index) in breadcrumb">
              <span>{{ item }}</span>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="tabs">
          <div class="tab" :class="tabActive.id == item.id ? 'tabActive' : ''" v-for="(item, index) in tabList" :key="index" @click="tabChange(item)">{{ item.value }}</div>
        </div>
        <div class="setting">
          <a-icon type="setting" />
          <span>应用配置</span>
        </div>
      </div>
    </div>
    <div class="breadcrumb">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item :key="index" v-for="(item, index) in breadcrumb">
          <span>{{ item }}</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <span>{{ tabActive.value }}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PageHeader",
  props: {
    title: {
      type: [String, Boolean],
      required: false,
    },
    breadcrumb: {
      type: Array,
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
      tabActive: {
        id: 1,
        value: "目录1",
      },
      tabList: [
        {
          id: 1,
          value: "目录1",
        },
        {
          id: 2,
          value: "目录2",
        },
        {
          id: 3,
          value: "目录3",
        },
      ],
    };
  },
  computed: {
    ...mapState("setting", ["layout", "showPageTitle", "pageWidth"]),
  },
  methods: {
    tabChange(item) {
      this.tabActive = item;
    },
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
