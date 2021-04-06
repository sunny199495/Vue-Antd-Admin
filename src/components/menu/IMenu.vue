<template>
  <div class="menu">
    <router-link :to="item.fullPath" :class="['menu-item', theme, path.fullPath == item.fullPath ? 'path-active' : '']" v-for="(item, index) in options" :key="index" @click="pathChange(item)">
      <a-icon :type="item.meta.icon" />
      <span>{{ item.name }}</span>
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    options: {
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
      path: {},
    };
  },
  computed: {
    sideTheme() {
      return this.theme == "light" ? this.theme : "dark";
    },
    ...mapState("setting", ["menu"]),
  },
  methods: {
    pathChange(item) {
      this.path = item;
    },
  },
};
</script>
<style lang="less" scoped>
.menu {
  .menu-item {
    padding: 10px 0;
    display: block;
    color: @layout-body-background;
    &:hover {
      color: @primary-color;
    }
  }
  .router-link-active {
    background: @primary-color;
    color: @layout-body-background;
    &:hover {
      color: @layout-body-background;
    }
  }
}
</style>
