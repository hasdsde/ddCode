<template>
  <q-layout view="hHh Lpr fFf" class="">
    <!-- 导航栏 -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>
          DD-Code管理系统
        </q-toolbar-title>
        <div>
          <span v-if="userInfo" class="q-mr-md">
            用户： {{ userInfo.nickName }}
          </span>
          <span v-else="userInfo" class="q-mr-md">
            用户：未登录
          </span>
          <q-btn icon="logout" size="sm" color="red" @click="handleLogout"/>
        </div>
      </q-toolbar>
    </q-header>

    <!-- 侧栏 -->
    <q-drawer v-model="leftDrawerOpen" bordered class="">
      <q-list padding class="rounded-borders text-primary">
        <q-expansion-item expand-separator v-for="(menu, key) of menus" :key="key" :icon="menu.icon" :label="menu.name"
                          v-model="menu.expand" @click="handleCardExpand(menu.name)">
          <q-item v-for="(child, index) in menu.children" :key="index" clickable v-ripple :to="child.url"
                  :active="link === child.url" @click="link = child.url" active-class="my-menu-link" class="text-black">
            <q-item-section avatar>
              <q-icon :name="child.icon" class="pl-5"/>
            </q-item-section>
            <q-item-section>
              {{ child.name }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {api} from 'src/boot/axios';
import {BaseApi} from 'src/pkg/models';
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';

const menuMap: any = []
let parentMenu: any = []
let childrenMenu: any = []
const leftDrawerOpen = ref(true)
const link: any = ref('')
const route = useRoute()
const userInfo = ref({nickName: ""})
const menus: any = ref([
  {
    "id": 2, "url": "/dashboard", "icon": "dashboard", "name": "仪表盘", "expand": false, "children": [
      {"id": 23, "url": "/dashboard/home", "icon": "home", "name": "首页"}
    ]
  },
  {
    "id": 1, "url": "/front", "icon": "auto_fix_high", "name": "前端工具", "expand": false, "children": [
      {"id": 12, "url": "/front/tailwind", "icon": "cyclone", "name": "Tailwind生成器"},
      {"id": 13, "url": "/front/icon", "icon": "emoji_events", "name": "Material Icon 列表"},
      {"id": 14, "url": "/front/func", "icon": "functions", "name": "函数调用指南"},
      {"id": 15, "url": "/front/table", "icon": "insert_chart_outlined", "name": "表格配置工具"},
    ]
  },

])

// 收起侧栏
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

onMounted(() => {
  loadMenu()
  getUserInfo()
})

// 记忆侧栏开合
function handleCardExpand(name: any) {
  parentMenu.forEach((item: any) => {
    if (item.name == name) {
      item.expand = !item.expand
    }
  });
  localStorage.setItem("parentMenu", JSON.stringify(parentMenu))
}

// 根据路由获取link
(function getFocus() {
  link.value = route.path
  // 代码生成器时默认关闭
  if (link.value == "/front/tailwind") {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
}())

function getUserInfo() {
  userInfo.value = JSON.parse(localStorage.getItem("userInfo") as string)
}

function handleLogout() {
  localStorage.clear()
  location.href = "/#/login"
}

// 获取远程Menu,或者使用本地
function loadMenu() {
}
</script>
<style lang="scss">
.my-menu-link {
  color: black;
  background: #F2C037
}
</style>
