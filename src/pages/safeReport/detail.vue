<template>
  <page-layout>
    <div class="header">
      <div class="title">中国银行2021年第二季度 企业安全报告</div>
      <div class="description">
        <div><span>本报告生成时间:</span><span>2021/04/01 08:00</span></div>
        <div><span>本报告周期范围:</span><span>2021年第二季度（2021年4月-2021年6月）</span></div>
        <div><span>报告来源:</span><span>安全管家平台</span></div>
      </div>
    </div>
    <div class="content">
      <div class="title">报告概率</div>
      <div class="event">
        <div class="overall">
          <div class="time">恭喜，本季度（2021/04-2021-06）</div>
          <div class="level">您的企业综合安全评级为<span>良</span></div>
        </div>
        <div class="event-content">
          <a-row>
            <a-col :span="8">
              <div>季度安全事件<span>12</span>起</div>
            </a-col>
            <a-col :span="8">
              <div>季度隐患率<span>12</span>起</div>
            </a-col>
            <a-col :span="8">
              <div>季度隐患等级<span>1</span>级</div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">关联数据</div>
      <div class="event-data">
        <a-row>
          <a-col :span="8">
            <div>季度安全事件<span>12</span>起</div>
          </a-col>
          <a-col :span="8">
            <div>季度隐患率<span>12</span>起</div>
          </a-col>
          <a-col :span="8">
            <div>季度隐患等级<span>1</span>级</div>
          </a-col>
        </a-row>
      </div>
    </div>
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
.header {
  text-align: center;
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .description {
    display: flex;
    > div {
      margin: 20px auto;
    }
  }
}
.content {
  background: @body-background;
  margin: 20px 0 40px 0;
  .title {
    position: relative;
    padding: 10px 20px;
    &::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 12px;
      background: @text-color-secondary;
      top: 50%;
      left: 10px;
      margin-top: -6px;
    }
  }
  .event {
    display: flex;
    padding: 20px;
    background: @primary-color;
    color: @body-background;
    span {
      font-size: 30px;
      padding: 10px;
    }
    .overall {
      width: 30%;
      font-size: 12px;
      .level {
        font-size: 16px;
        margin-left: 30px;
      }
    }
    .event-content {
      width: 70%;
      margin-top: 20px;
      text-align: center;
    }
  }

  .event-data {
    padding: 20px;
    .ant-row {
      padding: 20px;
      background: @layout-body-background;
      .ant-col {
        text-align: center;
        span {
          font-size: 30px;
          padding: 10px;
        }
      }
    }
  }
}
</style>
