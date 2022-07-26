<script setup>
import { defStore } from '../store/index'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.matched)
</script>
<template>
  <q-breadcrumbs class="inset-shadow q-px-md q-py-xs" v-if="defStore().config.breadcrumbs">
    <!-- shadow-3 -->
    <q-breadcrumbs-el
      v-for="(v, i) in route.matched"
      :label="v.meta.label"
      :icon="v.meta.icon"
      :to="{ name: v.name }"
    />
  </q-breadcrumbs>
</template>
