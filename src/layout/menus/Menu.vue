<script setup>
import MenuItem from './MenuItem.vue'
const props = defineProps({
  routes: Array
})
</script>
<template>
  <q-list>
    <template v-for="(v, i) in routes" :key="i">
      <q-item
        v-ripple
        active-class="bg-primary text-white"
        :to="{ name: v.name }"
        v-if="!v.children"
      >
        <q-item-section avatar>
          <q-icon :name="v.meta.icon" />
        </q-item-section>
        <q-item-section>{{ v.meta.label }}</q-item-section>
      </q-item>
      <MenuItem v-if="v.children" :item="v"></MenuItem>
    </template>
  </q-list>
</template>
