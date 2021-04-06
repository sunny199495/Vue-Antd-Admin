<template>
  <div>
    <a-menu :default-selected-keys="[pathKey]" mode="inline" :theme="theme" :inline-collapsed="collapsed">
      <a-menu-item v-for="(item, index) in options" :key="index" @click="pathChange(item)">
        <router-link :to="item.fullPath">
          <a-icon :type="item.meta.icon" />
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <drawer :visible="drawerVisible" @visibleChange="visibleChange" />
  </div>
</template>
<script>
import Drawer from "../drawer/Drawer";
import { mapState } from "vuex";
export default {
  components: { Drawer },
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
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      pathKey: 1,
      drawerVisible: false,
    };
  },
  computed: {
    sideTheme() {
      return this.theme == "light" ? this.theme : "dark";
    },
    ...mapState("setting", ["menu"]),
  },
  created() {
    this.options.forEach((element, index) => {
      if (element.fullPath == this.$route.fullPath) {
        this.pathKey = index;
      }
    });
  },
  methods: {
    pathChange(item) {
      if (item.fullPath == "/meaasge/list") {
        this.drawerVisible = true;
      }
    },
    visibleChange(val) {
      this.drawerVisible = val;
    },
  },
};
</script>
