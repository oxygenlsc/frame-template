import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/not-find",
    name: "not-find",
    meta: {
      title: "404页面",
    },
    component: () => import("@/pages/not-find.vue"), // 注意这里要带上 文件后缀.vue
  },
];

export default routes;
