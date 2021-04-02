<template>
  <a-layout-sider :theme="sideTheme" :class="['side-menu', 'beauty-scroll', isMobile ? null : 'shadow']" width="200px" :collapsible="collapsible" v-model="collapsed" :trigger="null">
    <div :class="['logo', theme]">
      <router-link to="/dashboard/workplace">
        <img src="@/assets/img/logo.png" />
        <h1>{{ systemName }}</h1>
      </router-link>
    </div>
    <i-menu :theme="theme" :collapsed="collapsed" :options="menuData" @select="onSelect" class="menu" />
    <a-icon :class="['trigger', sideTheme]" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapse" />
  </a-layout-sider>
</template>

<script>
import IMenu from "./menu";
import { mapState } from "vuex";
export default {
  name: "SideMenu",
  components: { IMenu },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false,
    },
    menuData: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      required: false,
      default: "dark",
    },
  },
  data() {
    return {
      collapsed: true,
    };
  },
  computed: {
    sideTheme() {
      return this.theme == "light" ? this.theme : "dark";
    },
    ...mapState("setting", ["isMobile", "systemName"]),
  },
  methods: {
    onSelect(obj) {
      this.$emit("menuSelect", obj);
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
      this.$emit("toggleCollapse");
    },
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
