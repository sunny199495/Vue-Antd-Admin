<template>
  <page-layout>
    <a-row>
      <a-col :span="6" @click="moduleCome" class="module">
        <a-icon type="read" />
        <div>安全报告</div>
      </a-col>
    </a-row>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout";
export default {
  components: { PageLayout },
  methods: {
    moduleCome() {
      this.$router.push("/safeReportList");
    },
  },
};
</script>

<style lang="less" scoped>
.module {
  text-align: center;
  background: @body-background;
  padding: 20px;
  .anticon {
    font-size: 30px;
    color: @primary-color;
  }
  &:hover {
    background: @primary-color;
    .anticon {
      color: @body-background;
    }
    > div {
      color: @body-background;
    }
  }
}
</style>
