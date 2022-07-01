<script setup>
import { computed, watch } from 'vue'

import { defStore } from '../store/index'
const include = computed(() => defStore().include)
const exclude = computed(() => defStore().exclude)
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
      <keep-alive :include="['DefViews', ...include]">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
