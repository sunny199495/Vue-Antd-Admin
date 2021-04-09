<template>
  <a-dropdown>
    <div class="side-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar" />
      <div class="name" :class="collapsed ? '' : 'name-open'">{{ user.name }}</div>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item @click="logout">
        <a-icon type="poweroff" />
        <span>退出登录</span>
      </a-menu-item>
      <a-menu-item @click="debug(true)" v-if="!isDebug">
        <a-icon type="tool" />
        <span>开启debug模式</span>
      </a-menu-item>
      <a-menu-item @click="debug(false)" v-else>
        <a-icon type="tool" />
        <span>关闭debug模式</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/services/user";

export default {
  name: "HeaderAvatar",
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isDebug: false,
    };
  },
  computed: {
    ...mapGetters("account", ["user"]),
  },
  created() {
    if (this.$ls.get("isDebug")) {
      this.isDebug = this.$ls.get("isDebug").isDebug || false;
    }
  },
  methods: {
    logout() {
      logout();
      this.$router.push("/login");
      if (this.$ls.get("isDebug").isDebug) {
        console.log(`退出成功，退出时间：${this.$currentTime()}`);
      }
    },
    debug(val) {
      this.$ls.put("isDebug", { isDebug: val }, 1);
      this.$ls.remove("header");
      setTimeout(() => {
        this.isDebug = val;
        location.reload();
      }, 500);
    },
  },
};
</script>

<style lang="less">
.name {
  margin: 10px;
}
.name-open {
  display: inline-block;
}
</style>
