<template>
  <div>
    <span @click="showDrawer" class="header-notice">
      <a-badge class="notice-badge" :count="count">
        <a-icon :class="['header-notice-icon']" type="bell" />
      </a-badge>
    </span>
    <a-drawer placement="right" :closable="false" :visible="visible" :after-visible-change="afterVisibleChange" @close="onClose">
      <a-spin :spinning="spining">
        <a-list class="list">
          <a-list-item v-for="(item, index) in list" :key="index" class="list-item">
            <model1 :item="item" />
            <model2 :item="item" />
            <model3 :item="item" />
          </a-list-item>
        </a-list>
      </a-spin>
    </a-drawer>
  </div>
</template>

<script>
import { messageList } from "@/services/test";
import model1 from "@/components/MessageCenter/model1.vue";
import model2 from "@/components/MessageCenter/model2.vue";
import model3 from "@/components/MessageCenter/model3.vue";
export default {
  components: { model1, model2, model3 },
  name: "HeaderNotice",
  data() {
    return {
      loading: false,
      show: false,
      list: [],
      count: 0,
      visible: false,
      spining: true,
    };
  },
  computed: {},
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    afterVisibleChange(visible) {
      if (visible) {
        this.getMessageList();
      } else {
        this.spining = true;
      }
    },
    getMessageList() {
      messageList().then((value) => {
        this.spining = false;
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
.ant-drawer {
  .ant-drawer-body {
    padding: 0;
  }
  .list .list-item {
    padding: 10px 20px;
  }
}
</style>
