<template>
  <a-layout-sider :theme="sideTheme" :class="['side-menu', 'beauty-scroll', isMobile ? null : 'shadow']" width="200px" :collapsible="collapsible" v-model="collapsed" :trigger="null">
    <div :class="['logo', theme]">
      <router-link to="/module/workplace">
        <img src="@/assets/img/logo.png" />
        <h1>{{ systemName }}</h1>
      </router-link>
    </div>
    <i-menu :theme="theme" :collapsed="collapsed" :options="menuData" @select="onSelect" class="menu" />
    <div :class="['side-bottom', theme]">
      <side-debug :class="['side-item', sideTheme]" v-if="isDebug" />
      <side-avatar :class="['side-item', sideTheme]" :collapsed="collapsed" />
      <a-icon :class="['trigger', sideTheme]" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapse" />
    </div>
  </a-layout-sider>
</template>

<script>
import IMenu from "./IMenu";
import SideDebug from "./SideDebug";
import SideAvatar from "./SideAvatar";
import { mapState } from "vuex";
export default {
  name: "SideMenu",
  components: { IMenu, SideDebug, SideAvatar },
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
      isDebug: false,
    };
  },
  computed: {
    sideTheme() {
      return this.theme == "light" ? this.theme : "dark";
    },
    ...mapState("setting", ["isMobile", "systemName"]),
  },
  created() {
    if (this.$ls.get("isDebug")) {
      this.isDebug = this.$ls.get("isDebug").isDebug;
    }
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
