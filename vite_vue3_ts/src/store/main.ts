import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    },
  },
});

// 用法
// $patch 修改 store 中的数据
//  mainStore.$patch({
//     name: '名称被修改了,nameLength也随之改变了'
//   })
// <template>
//   <div>{{mainStore.name}}</div>
// </template>

// <script setup lang="ts">
// import { useMainStore } from "@/store/mian"

// const mainStore = useMainStore()

// </script>
