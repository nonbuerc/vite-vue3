<script setup>
import { computed } from 'vue'

import { defStore } from '../store/index'
const keepAlive = computed(() => defStore().include)

const getFirstLevelRoute = (route) => {
  if (!Array.isArray(route.matched) || route.matched.length === 0) {
    return route
  }
  return route.matched[0]
}
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition appear enter-active-class="animated fadeInLeft">
      <!-- route -->
      <keep-alive :include="keepAlive.value">
        <component :is="Component" :key="getFirstLevelRoute(route).name" />
      </keep-alive>
    </transition>
  </router-view>
</template>
