import Vue from "vue";
import App from "./App.vue";
import { initRouter } from "./router";
import "./theme/index.less";
import Antd from "ant-design-vue";
import Viser from "viser-vue";
import "@/mock";
import store from "./store";
import "animate.css/source/animate.css";
import Plugins from "@/plugins";
import { initI18n } from "@/utils/i18n";
import bootstrap from "@/bootstrap";
import "moment/locale/zh-cn";

import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2451608_utwauxl1rt.js",
});
Vue.component("icon-font", IconFont);

// 本地缓存对象
import LS from "cz-storage";
Vue.prototype.$ls = LS;
// LS.put('key', value, 1) //设值（存储对象的名称，存储的值，存储的时间（单位天））
// LS.get('key') //获取值
// LS.remove('key') //删除某个key
// LS.clear() //清楚所有缓存

import { currentTime } from "./utils/util";
Vue.prototype.$currentTime = currentTime;

const router = initRouter(store.state.setting.asyncRoutes);
const i18n = initI18n("CN", "US");

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(Viser);
Vue.use(Plugins);

bootstrap({ router, store, i18n, message: Vue.prototype.$message });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
