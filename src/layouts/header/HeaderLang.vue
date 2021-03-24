<template>
  <a-dropdown>
    <div><a-icon type="global" /> {{ langAlias }}</div>
    <a-menu @click="(val) => setLang(val.key)" :selected-keys="[lang]" slot="overlay">
      <a-menu-item v-for="lang in langList" :key="lang.key">{{ lang.name }}</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      langList: [
        { key: "CN", name: "简体中文", alias: "简体" },
        { key: "HK", name: "繁體中文", alias: "繁體" },
        { key: "US", name: "English", alias: "English" },
      ],
    };
  },
  computed: {
    ...mapState("setting", ["lang"]),
    langAlias() {
      let lang = this.langList.find((item) => item.key == this.lang);
      return lang.alias;
    },
  },
  methods: {
    ...mapMutations("setting", ["setLang"]),
  },
};
</script>
