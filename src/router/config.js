import TabsView from "@/layouts/tabs/TabsView";
// import BlankView from "@/layouts/BlankView";
// import PageView from "@/layouts/PageView";

// 路由配置
const options = {
  mode: "history",
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
      redirect: "/workplace",
      children: [
        {
          path: "workplace",
          name: "应用",
          meta: { icon: "appstore", page: { closable: false, openNewtab: true, navShow: true, workModal: false, breadcrumb: ["工作台"] } },
          component: () => import("@/pages/workplace/WorkPlace"),
        },
        {
          path: "favorites",
          name: "收藏",
          meta: { icon: "star", page: { closable: false, openNewtab: true, navShow: true, workModal: false, breadcrumb: ["工作台"] } },
        },
        {
          path: "dataCenter",
          name: "数据中心",
          meta: { icon: "appstore", page: { closable: true, openNewtab: true, navShow: false, workModal: true, breadcrumb: ["数据中心", "应用首页"] } },
          component: () => import("@/pages/dataCenter/dataCenter"),
        },
        {
          path: "message",
          name: "消息中心",
          meta: { icon: "bell", page: { closable: true, openNewtab: true, navShow: true, workModal: false, breadcrumb: ["消息中心", "列表"] } },
          component: () => import("@/pages/message/list"),
        },
        {
          path: "messageDetail",
          name: "消息详情",
          meta: { icon: "bell", page: { closable: true, openNewtab: true, navShow: false, workModal: false, breadcrumb: ["消息中心", "详情"] } },
          component: () => import("@/pages/message/detail"),
        },
        {
          path: "safeReportList",
          name: "安全报告列表",
          meta: { icon: "safety", page: { closable: true, openNewtab: false, navShow: false, workModal: false, breadcrumb: ["数据中心", "安全报告", "列表"] } },
          component: () => import("@/pages/safeReport/list"),
        },
        {
          path: "safeReportDetail",
          name: "安全报告详情",
          meta: { icon: "safety", page: { closable: true, openNewtab: false, navShow: false, workModal: false, breadcrumb: ["数据中心", "安全报告", "详情"] } },
          component: () => import("@/pages/safeReport/detail"),
        },
      ],
    },
  ],
};

export default options;
