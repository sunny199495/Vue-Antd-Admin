<template>
  <div>
    <a-modal class="notice" v-model="isNotice" :footer="null" :closable="false" centered>
      <div @click="detail">
        <img class="img" :src="item.templateValue.source.image" alt="" />
        <div class="message">
          <div class="person">{{ item.templateValue.source.name }}</div>
          <div class="time">{{ item.templateValue.time }}</div>
          <div class="content-bg">
            <div class="content">
              <span class="address"><icon-font type="iconweizhi" />{{ item.templateValue.title.place }}</span>
              <span>发生</span>
              <span class="level"> <a-icon type="warning" />{{ item.templateValue.title.levelName }} </span>
              <span>告警</span>
              <span>,</span>
              <span>请尽快处理</span>
            </div>
          </div>
        </div>
      </div>
      <a-icon class="close" type="close-circle" @click="close" />
    </a-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("setting", ["isNotice"]),
  },
  methods: {
    ...mapMutations("setting", ["setNotice"]),
    close() {
      this.setNotice(false);
    },
    detail() {
      this.$router.push("/message/detail");
      this.setNotice(false);
    },
  },
};
</script>

<style lang="less" scoped>
.content-bg {
  .level {
    color: @error-color;
  }
}
</style>
