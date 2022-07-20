<script setup>
import MenuItem from './MenuItem.vue'

const props = defineProps({
  routes: {
    type: Array,
    default: () => []
  },
  selMenu: {
    type: Array,
    default: () => []
  },
  mode: {
    type: String,
    default: 'horizontal'
  }
})
</script>
<template>
  <template v-if="mode === 'vertical'">
    <q-list>
      <template v-for="(v, i) in props.routes" :key="i">
        <template v-if="!v.children">
          <q-item v-ripple active-class="bg-primary text-white" :to="{ name: v.name }">
            <q-item-section avatar>
              <q-icon :name="v.meta.icon" />
            </q-item-section>
            <q-item-section>{{ v.meta.label }}</q-item-section>
          </q-item>
        </template>
        <template v-if="v.children">
          <MenuItem :item="v" :selMenu="selMenu" :key="v.name" :mode="mode"></MenuItem
        ></template>
      </template>
    </q-list>
  </template>

  <template v-if="mode === 'horizontal'">
    <q-tabs
      inline-label
      outside-arrows
      mobile-arrows
      align="left"
      active-class="bg-primary text-white"
    >
      <template v-for="(v, i) in props.routes" :key="i">
        <template v-if="!v.children">
          <q-route-tab
            v-if="!v.children"
            :to="{ name: v.name }"
            :icon="v.meta.icon"
            :label="v.meta.label"
            :ripple="false"
          >
          </q-route-tab>
        </template>
        <template v-if="v.children">
          <MenuItem :item="v" :selMenu="selMenu" :key="v.name" :mode="mode"></MenuItem>
        </template>
      </template>
    </q-tabs>
  </template>
</template>
