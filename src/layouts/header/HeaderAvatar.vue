<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar" />
      <span class="name">{{ user.name }}</span>
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
  data() {
    return {
      isDebug: false,
    };
  },
  computed: {
    ...mapGetters("account", ["user"]),
  },
  created() {
    this.isDebug = this.$ls.get("isDebug").isDebug || false;
  },
  methods: {
    logout() {
      logout();
      this.$router.push("/login");
    },
    debug(val) {
      this.$ls.put("isDebug", { isDebug: val }, 1);
      setTimeout(() => {
        this.isDebug = val;
        location.reload();
      }, 500);
    },
  },
};
</script>

<style lang="less">
.header-avatar {
  display: inline-flex;
  .avatar,
  .name {
    align-self: center;
  }
  .avatar {
    margin-right: 8px;
  }
  .name {
    font-weight: 500;
  }
}
.avatar-menu {
  width: 150px;
}
</style>
