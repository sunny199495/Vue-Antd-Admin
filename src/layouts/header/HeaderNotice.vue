<template>
  <a-dropdown :trigger="['click']" v-model="show" @visibleChange="visibleChange">
    <div slot="overlay">
      <a-spin :spinning="loading">
        <a-tabs class="dropdown-tabs" :tabBarStyle="{ textAlign: 'center' }" :style="{ width: '297px' }">
          <a-tab-pane tab="通知" key="1">
            <a-list class="tab-pane">
              <a-list-item v-for="(item, index) in list" :key="index">
                <a-list-item-meta :title="item.title" :description="item.content">
                  <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="消息" key="2">
            <a-list class="tab-pane"></a-list>
          </a-tab-pane>
          <a-tab-pane tab="待办" key="3">
            <a-list class="tab-pane"></a-list>
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </div>
    <span @click="fetchNotice" class="header-notice">
      <a-badge class="notice-badge" :count="count">
        <a-icon :class="['header-notice-icon']" type="bell" />
      </a-badge>
    </span>
  </a-dropdown>
</template>

<script>
import { messageList } from "@/services/test";
export default {
  name: "HeaderNotice",
  data() {
    return {
      loading: false,
      show: false,
      list: [],
      count: 0,
    };
  },
  computed: {},
  methods: {
    fetchNotice() {
      if (this.loading) {
        this.loading = false;
        return;
      }
      this.loadding = true;
      setTimeout(() => {
        this.loadding = false;
      }, 1000);
    },
    visibleChange(visible) {
      if (visible) {
        this.getMessageList();
      }
    },
    getMessageList() {
      messageList().then((value) => {
        const res = JSON.parse(JSON.stringify(value));
        console.log(res.data);
        if (res.data.code == 200) {
          this.list = res.data.data.pageData;
          if (this.list && this.list.length) this.count = this.list.length;
        }
      });
    },
  },
};
</script>

<style lang="less">
.header-notice {
  display: inline-block;
  transition: all 0.3s;
  span {
    vertical-align: initial;
  }
  .notice-badge {
    color: inherit;
    .header-notice-icon {
      font-size: 16px;
      padding: 4px;
    }
  }
}
.dropdown-tabs {
  background-color: @base-bg-color;
  box-shadow: 0 2px 8px @shadow-color;
  border-radius: 4px;
  .tab-pane {
    padding: 0 24px 12px;
    min-height: 250px;
  }
}
</style>
