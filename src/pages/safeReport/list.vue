<template>
  <page-layout>
    <div>2021</div>
    <a-row>
      <a-col :span="5" class="content" v-for="index in 5" :key="index" @click="detail">
        <div class="overall">
          <div>整体安全情况评估</div>
          <div class="level">良</div>
        </div>
        <div class="description">
          <div class="company">中国银行整体安全报告</div>
          <div class="title">2021年第一季度</div>
          <div class="time">2021年1月～2021年3月</div>
          <div>
            <a-button type="primary">下载报告的pdf</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
export default {
  components: { PageLayout },
  data() {
    return {
      list: [
        {
          year: "2021",
          data: [
            {
              safeLevel: "优秀",
            },
          ],
        },
      ],
    };
  },
  methods: {
    detail() {
      this.$router.push("/safeReport/detail");
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  text-align: center;
  background: @body-background;
  margin: 20px;
  .overall {
    background: cornflowerblue;
    color: @body-background;
    line-height: 50px;
    padding: 20px 0;
    .level {
      font-size: 40px;
      font-weight: bold;
    }
  }
  .description {
    > div {
      margin: 20px 0;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
