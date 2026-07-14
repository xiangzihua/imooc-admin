<template>
  <el-menu
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :collapse="!$store.getters.sidebarOpened"
    router
  >
    <!-- 子级 menu 菜单 -->
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped>
</style>
