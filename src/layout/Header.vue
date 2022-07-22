<script setup>
import { watch } from 'vue'
import { useQuasar } from 'quasar'

import { defStore } from '../store/index'
import { useRouter } from 'vue-router'

import { Menu } from './index'

const $q = useQuasar()
//主题
if (!defStore().config.theme) $q.dark.set(true)

watch(
  () => defStore().resize,
  (v) => {
    console.log(v)
  }
)
</script>

<template>
  <q-header
    v-model="defStore().config.isReveal"
    reveal
    :bordered="false"
    style="color: inherit; background: inherit"
  >
    <q-toolbar>
      <q-btn
        v-if="
          ['all', 'left'].includes(defStore().config.menuPosition) && defStore().config.showMenu
        "
        @click="defStore().$patch((state) => (state.config.drawerMenu = !state.config.drawerMenu))"
        round
        dense
        icon="menu"
      />

      <q-btn round class="q-ml-md">
        <q-avatar>
          <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
        </q-avatar>
      </q-btn>

      <q-toolbar-title style="max-width: fit-content">
        <!-- style="max-width: fit-content" -->
        <strong>Vite Vue3 Header</strong>
      </q-toolbar-title>

      <!-- 
        ***
       -->

      <div
        style="min-width: 1px; flex: 1"
        v-if="
          ['all', 'header'].includes(defStore().config.menuPosition) &&
          !defStore().resize.hideMenu &&
          defStore().config.showMenu
        "
      >
        <Menu
          :routes="useRouter().options.routes"
          :selMenu="defStore().selMenu"
          mode="horizontal"
        ></Menu>
      </div>

      <q-space v-else />

      <!-- 
        ***
       -->

      <q-btn
        class="q-mr-md"
        round
        dense
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      />

      <q-btn
        class="q-mr-md"
        round
        dense
        :icon="!$q.dark.isActive ? 'wb_sunny' : 'nights_stay'"
        @click="
          () => {
            defStore().$patch((state) => (state.config.theme = !state.config.theme))
            $q.dark.toggle()
          }
        "
      />

      <q-btn round class="q-mr-md">
        <q-avatar>
          <q-img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-btn>

      <q-btn
        v-if="defStore().config.showDrawerSetting || false"
        round
        dense
        icon="more_vert"
        @click="
          defStore().$patch((state) => (state.config.drawerSetting = !state.config.drawerSetting))
        "
      />
    </q-toolbar>

    <q-toolbar inset v-if="defStore().config.headerInset">
      <q-toolbar-title> <strong>Quasar</strong> Framework </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
