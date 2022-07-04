<script setup>
import { Menu, Header, Container, Setting } from './index'

import { defStore } from '../store/index'
</script>

<template>
  <q-layout :view="defStore().config.view" style="height: 100vh; overflow: hidden">
    <Header></Header>
    <q-drawer
      :side="defStore().config.swapMenuAndSetting ? 'left' : 'right'"
      class="inset-shadow q-pa-sm"
      v-model="defStore().config.drawerMenu"
      :width="260"
      :breakpoint="700"
    >
      <q-scroll-area class="fit inset-shadow">
        <Menu></Menu>
      </q-scroll-area>
    </q-drawer>
    <q-drawer
      :side="!defStore().config.swapMenuAndSetting ? 'left' : 'right'"
      v-model="defStore().config.drawerSetting"
      :width="330"
      :breakpoint="500"
      behavior="desktop"
      class="inset-shadow q-pa-sm"
    >
      <q-scroll-area class="fit inset-shadow q-py-sm">
        <Setting />
      </q-scroll-area>
    </q-drawer>
    <Container />
    <q-footer v-if="defStore().config.footer">
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
