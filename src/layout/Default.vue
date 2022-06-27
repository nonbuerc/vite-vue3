<script setup>
import { computed } from 'vue'

import { defStore } from '../store/index'
const keepAlive = computed(() => defStore().include)
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition appear enter-active-class="animated fadeInLeft">
      <!-- route -->
      <keep-alive :include="keepAlive.value">
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </transition>
  </router-view>
</template>
