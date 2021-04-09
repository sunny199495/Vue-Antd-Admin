<template>
  <div></div>
</template>

<script>
export default {
  props: ["addButton", "editButton", "detailButton", "delButton"],
  watch: {
    addButton(val) {
      if (val) {
        this.$emit("change", false);
        console.log(`点击新增按钮，点击时间：${this.$currentTime()}`);
      }
    },
    editButton(val) {
      if (val) {
        this.$emit("change", false);
        console.log(`点击编辑按钮，点击时间：${this.$currentTime()}`);
      }
    },
    detailButton(val) {
      if (val) {
        this.$emit("change", false);
        console.log(`点击详情按钮，点击时间：${this.$currentTime()}`);
      }
    },
    delButton(val) {
      if (val) {
        this.$emit("change", false);
        console.log(`点击删除按钮，点击时间：${this.$currentTime()}`);
      }
    },
  },
  methods: {
    change() {
      this.$emit("change", false);
    },
  },
};
</script>
