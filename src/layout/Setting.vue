<script setup>
import { ref, watch } from 'vue'
import { useQuasar, setCssVar } from 'quasar'

import { defStore } from '../store/index'

const $q = useQuasar()

//主题
watch(
  () => defStore().config.theme,
  () => {
    $q.dark.toggle()
  }
)

//主题色
setCssVar('primary', defStore().config.primary)
watch(
  () => defStore().config.primary,
  () => {
    setCssVar('primary', defStore().config.primary)
  }
)
</script>
<template>
  <!-- <q-dialog v-model="defStore().config.drawerRight" position="right" maximized> -->
  <!-- <q-card class="fit q-pa-sm"> -->
  <q-list dense>
    <q-item>
      <q-item-section class="text-primary"> 主题 </q-item-section>
      <q-item-section avatar>
        <q-btn-toggle
          v-model="defStore().config.theme"
          glossy
          :options="[
            { label: '白', value: 'light' },
            { label: '黑', value: 'dark' }
          ]"
        />
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item>
      <q-item-section class="text-primary">主题色</q-item-section>
      <q-item-section avatar>
        <q-btn round push color="primary">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-color v-model="defStore().config.primary" />
          </q-popup-proxy>
        </q-btn>
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item>
      <q-item-section class="text-primary">HeaderInset</q-item-section>
      <q-item-section avatar>
        <q-toggle v-model="defStore().config.headerInset" />
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item>
      <q-item-section class="text-primary">NavMenus</q-item-section>
      <q-item-section avatar>
        <q-toggle v-model="defStore().config.navMenus" />
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item>
      <q-item-section class="text-primary">Breadcrumbs</q-item-section>
      <q-item-section avatar>
        <q-toggle v-model="defStore().config.breadcrumbs" />
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
  </q-list>
  <!-- </q-card> -->
  <!-- </q-dialog> -->
</template>

<style></style>
