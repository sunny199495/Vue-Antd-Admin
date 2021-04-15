<template>
  <div>
    <a-menu mode="inline" :theme="theme" :inline-collapsed="collapsed">
      <a-menu-item v-for="(item, index) in options" :key="index" @click="pathChange(item)">
        <div>
          <a-icon :type="item.meta.icon" />
          <span>{{ item.name }}</span>
        </div>
      </a-menu-item>
    </a-menu>
    <drawer :visible="drawerVisible" @visibleChange="visibleChange" />
    <message-modal :visible="messageModalVisible" :collapsed="collapsed" @visibleChange="visibleChange" />
    <work-modal :visible="workModalVisible" :collapsed="collapsed" @visibleChange="visibleChange" />
    <point-page v-if="isDebug" :isSwitch="isSwitch" :currentPagePath="currentPagePath" @pageChange="pageChange" />
  </div>
</template>
<script>
import Drawer from "../drawer/Drawer";
import MessageModal from "../modal/MessageModal";
import WorkModal from "../modal/WorkModal";
import PointPage from "@/components/buriedPoint/PointPage";
import { mapState } from "vuex";
export default {
  components: { Drawer, PointPage, MessageModal, WorkModal },
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
      drawerVisible: false,
      isSwitch: false,
      currentPagePath: null,
      isDebug: false,
      messageModalVisible: false,
      workModalVisible: false,
    };
  },
  computed: {
    sideTheme() {
      return this.theme == "light" ? this.theme : "dark";
    },
    ...mapState("setting", ["menu"]),
  },
  created() {
    if (this.$ls.get("isDebug")) {
      this.isDebug = this.$ls.get("isDebug").isDebug;
    }
  },
  methods: {
    pathChange(item) {
      console.log(item);
      this.isSwitch = true;
      this.currentPagePath = item.fullPath;
      if (item.path == "message") {
        this.messageModalVisible = true;
      } else if (item.path == "dashboard/workplace") {
        this.workModalVisible = true;
      }
    },
    pageChange(val) {
      this.isSwitch = val;
    },
    visibleChange(val) {
      this.drawerVisible = val;
      this.messageModalVisible = val;
      this.workModalVisible = val;
    },
  },
};
</script>
<style lang="less">
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background: none;
}
</style>
