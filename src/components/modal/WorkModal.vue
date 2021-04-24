<template>
  <a-modal :closable="false" :visible="visible" :footer="null" @cancel="handleCancel" :width="300" :class="['WorkModal', sideLeft]">
    <div class="module">
      <a-row>
        <a-col :span="12" v-for="(item, index) in workList" :key="index" @click="pathChange(item)">
          <a-icon :type="item.meta.icon" />
          <div class="text">{{ item.name }}</div>
        </a-col>
      </a-row>
    </div>
  </a-modal>
</template>

<script>
import { GetModule } from "@/api/mock";

export default {
  props: ["visible", "collapsed"],
  data() {
    return {
      left: "80",
      workList: [],
    };
  },
  computed: {
    sideLeft() {
      return this.collapsed ? "" : "sideLeft";
    },
  },
  watch: {
    visible(val) {
      this.modalVisible = val;
      if (val) {
        this.getModule();
      }
    },
    collapsed(val) {
      if (val) {
        this.left = "80";
      } else {
        this.left = "200";
      }
    },
  },
  methods: {
    handleCancel() {
      this.modalVisible = false;
      this.$emit("visibleChange", this.modalVisible);
    },
    pathChange(item) {
      this.handleCancel();
      this.$router.push(item.fullPath);
    },
    async getModule() {
      const res = await GetModule();
      if (res.data.code == 200) {
        this.workList = res.data.data.routes;
      }
    },
  },
};
</script>
<style lang="less">
.WorkModal {
  .ant-modal {
    position: absolute;
    left: 80px;
    top: 50px;
    .ant-modal-body {
      padding: 10px;
    }
  }
  .module {
    text-align: center;
    .ant-row {
      .ant-col {
        padding: 20px;
        border-radius: 4px;
        .anticon {
          font-size: 40px;
          color: @primary-color;
        }
        .text {
          font-weight: bold;
        }
        &:hover {
          background: @primary-color;
          .anticon {
            color: @layout-body-background;
          }
          .text {
            color: @layout-body-background;
          }
        }
      }
    }
  }
}
.sideLeft {
  .ant-modal {
    left: 200px;
  }
}
</style>
