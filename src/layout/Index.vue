<script setup>
import { ref } from 'vue'
import { Menu, Header, Container, Setting } from './index'
const drawer = ref(true)
const isReveal = ref(true)
const scroll = (e) => {
  isReveal.value = e
}
</script>

<template>
  <q-layout view="lHh LpR lFf" style="height: 100vh; overflow: hidden">
    <Header :isReveal="isReveal" @menuToggle="() => (drawer = !drawer)"></Header>
    <q-drawer v-model="drawer" :width="230" :breakpoint="700">
      <q-scroll-area class="fit">
        <Menu></Menu>
      </q-scroll-area>
    </q-drawer>
    <Container @scroll="scroll" />
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <Setting />
  </q-layout>
</template>
