import TabsView from "@/layouts/tabs/TabsView";
import BlankView from "@/layouts/BlankView";
import PageView from "@/layouts/PageView";

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
      path: "/",
      name: "首页",
      component: TabsView,
      redirect: "/module/workplace",
      children: [
        {
          path: "module",
          name: "功能模块",
          redirect: "/module/workplace",
          meta: { icon: "dashboard" },
          component: BlankView,
          children: [
            {
              path: "workplace",
              name: "工作台",
              meta: { icon: "dashboard", page: { closable: false } },
              component: () => import("@/pages/workplace/WorkPlace"),
            },
            {
              path: "dataCenter",
              name: "数据中心",
              meta: { icon: "read" },
              component: () => import("@/pages/dataCenter/dataCenter"),
            },
          ],
        },
        {
          path: "message",
          name: "消息中心",
          meta: { icon: "bell" },
          redirect: "/message/list",
          component: PageView,
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
      ],
    },
  ],
};

export default options;
