<template>
  <div :class="['tabs-head', headerTheme, layout, pageWidth]">
    <a-tabs type="editable-card" :class="['tabs-container', layout, pageWidth, { affixed: affixed, 'fixed-header': fixedHeader, collapsed: adminLayout.collapsed }]" :active-key="active" :hide-add="true">
      <!-- <a-tooltip placement="left" slot="tabBarExtraContent">
        <a-icon class="header-fullscreen" type="more" />
      </a-tooltip> -->
      <a-tooltip placement="left" :title="fullscreenTitle" slot="tabBarExtraContent">
        <a-icon class="header-fullscreen" @click="onFullscreenClick" :type="affixed ? 'fullscreen-exit' : 'fullscreen'" />
      </a-tooltip>
      <a-tab-pane v-for="page in pageList" :key="page.fullPath">
        <div slot="tab" class="tab" @contextmenu="(e) => onContextmenu(page.fullPath, e)">
          <a-icon @click="onRefresh(page)" :class="['icon-sync', { hide: page.fullPath !== active && !page.loading }]" :type="page.loading ? 'loading' : 'sync'" />
          <div class="title" @click="onTabClick(page.fullPath)">{{ pageName(page) }}</div>
          <a-icon v-if="!page.unclose" @click="onClose(page.fullPath)" class="icon-close" type="close" />
        </div>
      </a-tab-pane>
    </a-tabs>
    <div v-if="affixed" class="virtual-tabs"></div>
    <point-page v-if="isDebug" :isSwitch="isSwitch" :isRefresh="isRefresh" :isClose="isClose" :currentPagePath="currentPagePath" @pageChange="pageChange" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getI18nKey } from "@/utils/routerUtil";
import PointPage from "@/components/buriedPoint/PointPage";

export default {
  name: "TabsHead",
  components: { PointPage },
  i18n: {
    messages: {
      CN: {
        fullscreen: "点击全屏",
        unfullscreen: "点击解除全屏",
      },
      HK: {
        fullscreen: "點擊全屏",
        unfullscreen: "點擊解除全屏",
      },
      US: {
        fullscreen: "Click full screen",
        unfullscreen: "Click to dismiss full screen",
      },
    },
  },
  props: {
    pageList: Array,
    active: String,
    fixed: Boolean,
  },
  data() {
    return {
      affixed: false,
      isSwitch: false,
      isRefresh: false,
      isClose: false,
      currentPagePath: null,
      isDebug: false,
    };
  },
  inject: ["adminLayout"],
  created() {
    this.affixed = this.fixedTabs;
    if (this.$ls.get("isDebug")) {
      this.isDebug = this.$ls.get("isDebug").isDebug;
    }
  },
  computed: {
    ...mapState("setting", ["layout", "pageWidth", "fixedHeader", "fixedTabs", "fixedHeader", "customTitles", "theme"]),
    fullscreenTitle() {
      return this.$t(this.affixed ? "unfullscreen" : "fullscreen");
    },
    headerTheme() {
      return this.theme.mode;
    },
  },
  methods: {
    ...mapMutations("setting", ["setFixedTabs", "setFixedHeader"]),
    onFullscreenClick() {
      this.setFixedTabs(!this.fixedTabs);
      this.setFixedHeader(false);
      if (this.fixedTabs) {
        setTimeout(() => {
          this.affixed = true;
        }, 200);
      } else {
        this.affixed = false;
      }
    },
    onTabClick(key) {
      if (this.active !== key) {
        this.$emit("change", key);
        this.isSwitch = true;
        this.currentPagePath = key;
      }
    },
    pageChange(val) {
      this.isSwitch = val;
      this.isClose = val;
      this.isRefresh = val;
    },
    onClose(key) {
      this.$emit("close", key);
      this.isClose = true;
      this.currentPagePath = key;
    },
    onRefresh(page) {
      this.$emit("refresh", page.fullPath, page);
      this.isRefresh = true;
      this.currentPagePath = page.fullPath;
    },
    onContextmenu(pageKey, e) {
      this.$emit("contextmenu", pageKey, e);
    },
    pageName(page) {
      const pagePath = page.fullPath.split("?")[0];
      const custom = this.customTitles.find((item) => item.path === pagePath);
      return (custom && custom.title) || page.title || this.$t(getI18nKey(page.keyPath));
    },
  },
};
</script>

<style scoped lang="less">
.tab {
  user-select: none;
  transition: all 0.2s;
  .title {
    display: inline-block;
    height: 100%;
    &:hover {
      color: @primary-color;
    }
  }
  .icon-close {
    font-size: 12px;
    margin-left: 6px;
    margin-right: -4px !important;
    color: @text-color-second;
    &:hover {
      color: @text-color;
    }
  }
  .icon-sync {
    margin-left: -4px;
    color: @primary-4;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: @primary-color;
    }
    font-size: 14px;
    &.hide {
      font-size: 0;
    }
  }
}
.tabs-head {
  margin: 0 auto;
  &.head.fixed {
    width: 1400px;
  }
}
.tabs-container {
  margin: 12px 0 0 0;
  transition: top, left 0.2s;
  .header-fullscreen {
    font-size: 18px;
    cursor: pointer;
    color: @primary-3;
    margin-right: 10px;
    &:hover {
      color: @primary-color;
    }
  }
  &.affixed {
    margin: 0 auto;
    top: 0px;
    padding: 8px 24px 0;
    position: fixed;
    height: 48px;
    z-index: 1;
    background-color: @layout-body-background;
    &.side,
    &.mix {
      right: 0;
      left: 256px;
      &.collapsed {
        left: 80px;
      }
    }
    &.head {
      width: inherit;
      padding: 8px 0 0;
      &.fluid {
        left: 0;
        right: 0;
        padding: 8px 24px 0;
      }
    }
    &.fixed-header {
      top: 64px;
    }
  }
}
.virtual-tabs {
  height: 48px;
}
</style>
