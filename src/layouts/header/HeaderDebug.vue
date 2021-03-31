<template>
  <div>
    <div @click="showModal">
      <a-icon type="tool" class="header-item" />
    </div>
    <a-modal v-model="modalVisible" title="修改测试用例数据" centered @ok="ok">
      <div>
        <div>caseId</div>
        <a-input v-model="caseId" placeholder="请输入caseId" />
      </div>
      <br />
      <div>
        <div>projectId</div>
        <a-input v-model="projectId" placeholder="请输入projectId" />
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalVisible: false,
      caseId: null,
      projectId: null,
    };
  },
  created() {
    if (this.$ls.get("header")) {
      this.caseId = this.$ls.get("header").caseId;
      this.projectId = this.$ls.get("header").projectId;
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    ok() {
      this.modalVisible = false;
      const data = { caseId: this.caseId, projectId: this.projectId };
      this.$ls.put("header", data, 1);
      location.reload();
    },
  },
};
</script>
