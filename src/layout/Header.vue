<script setup>
import { defStore } from '../store/index'
import { useRouter } from 'vue-router'

import { Menu } from './index'
</script>

<template>
  <q-header
    v-model="defStore().config.isReveal"
    reveal
    elevated
    style="color: inherit; background: inherit"
  >
    <q-toolbar>
      <div class="q-gutter-md">
        <q-btn
          v-if="defStore().config.menuPosition === 'left' && defStore().config.showMenu"
          @click="
            defStore().$patch((state) => (state.config.drawerMenu = !state.config.drawerMenu))
          "
          round
          dense
          icon="menu"
        />
        <q-btn round>
          <q-avatar>
            <q-img src="../assets/svg/logo.svg" />
          </q-avatar>
        </q-btn>
      </div>

      <q-toolbar-title>
        <strong>Header</strong>
      </q-toolbar-title>
      <Menu
        v-if="defStore().config.menuPosition === 'header' && defStore().config.showMenu"
        :routes="useRouter().options.routes"
        :selMenu="defStore().selMenu"
        mode="horizontal"
      ></Menu>
      <div class="q-gutter-md">
        <q-btn round>
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
      </div>
    </q-toolbar>
    <q-toolbar inset v-if="defStore().config.headerInset">
      <q-toolbar-title> <strong>Quasar</strong> Framework </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
