import TabsView from "@/layouts/tabs/TabsView";
// import BlankView from "@/layouts/BlankView";
// import PageView from "@/layouts/PageView";

// 路由配置
const options = {
  routes: [
    {
      path: "/login",
      name: "登录页",
      component: () => import("@/pages/login"),
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/pages/exception/404"),
    },
    {
      path: "/403",
      name: "403",
      component: () => import("@/pages/exception/403"),
    },
    {
      path: "/message",
      name: "消息中心",
      component: TabsView,
      redirect: "/login",
      children: [
        {
          path: "list",
          name: "消息列表",
          meta: {
            icon: "dashboard",
          },
          component: () => import("@/pages/message/list"),
        },
        {
          path: "detail",
          name: "消息详情",
          meta: {
            icon: "dashboard",
          },
          component: () => import("@/pages/message/detail"),
        },
      ],
    },
    {
      path: "/",
      name: "首页",
      component: TabsView,
      redirect: "/login",
      children: [
        {
          path: "dashboard/workplace",
          name: "工作台",
          meta: { icon: "dashboard", page: { closable: false } },
          component: () => import("@/pages/dashboard/workplace/WorkPlace"),
        },
        {
          path: "meaasge/list",
          name: "消息中心",
          meta: { icon: "bell" },
          component: () => import("@/pages/message/list.vue"),
        },
        {
          path: "buriedPoint",
          name: "埋点demo",
          meta: { icon: "more" },
          component: () => import("@/pages/buriedPoint/BuriedPoint.vue"),
        },
      ],
    },
  ],
};

export default options;
