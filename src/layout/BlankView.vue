<script setup>
import { computed } from 'vue'

import { defStore } from '../store/index'
const include = computed(() => defStore().include)
const exclude = computed(() => defStore().exclude)
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition appear enter-active-class="animated fadeInLeft">
      <!-- route -->
      <keep-alive :include="['BlankView', ...include]">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
