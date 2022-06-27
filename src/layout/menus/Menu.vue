<script setup>
import MenuItem from './MenuItem.vue'
import { useRouter } from 'vue-router'
</script>
<template>
  <q-list>
    <template v-for="(v, i) in useRouter().options.routes" :key="i">
      <q-item :to="{ name: v.name }" v-if="!v.children">
        <q-item-section avatar>
          <q-icon :name="v.meta.icon" />
        </q-item-section>
        <q-item-section>{{ v.meta.label }}</q-item-section>
      </q-item>
      <MenuItem v-if="v.children" :item="v"></MenuItem>
    </template>
  </q-list>
</template>
