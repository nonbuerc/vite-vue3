<script setup>
import { ref, watch } from 'vue'
import { defStore } from '../store/index'
import { useRoute } from 'vue-router'
import { Menu, Header, Container, Setting } from './index'
import { getCurrentInstance } from 'vue'
console.log(getCurrentInstance())
const route = useRoute()
watch(
  () => route.matched,
  (v) => {
    defStore().$patch((state) => (state.selMenu = []))
    v &&
      v.forEach((r) => {
        if (r.children?.length > 0) {
          defStore().$patch((state) => (state.selMenu = [...state.selMenu, r.name]))
        }
      })
  }
)
const resize = (size) => {
  defStore().$patch((state) => {
    state.resize = size
    if (size.width < 800) state.resize.hideMenu = true
  })
}
const mini = ref(false)
</script>

<template>
  <q-layout :view="defStore().config.view" style="height: 100vh; overflow: hidden" @resize="resize">
    <Header></Header>
    <q-drawer
      v-if="['all', 'left'].includes(defStore().config.menuPosition) && defStore().config.showMenu"
      :side="defStore().config.swapMenuAndSetting ? 'left' : 'right'"
      class="inset-shadow q-pa-sm"
      v-model="defStore().config.drawerMenu"
      :breakpoint="1000"
      :mini="mini"
      :width="230"
    >
      <q-scroll-area class="fit inset-shadow">
        <Menu
          :routes="$router.options.routes"
          :selMenu="defStore().selMenu"
          :mode="'vertical'"
          v-model:mini="mini"
        ></Menu>
      </q-scroll-area>
    </q-drawer>
    <q-drawer
      :side="!defStore().config.swapMenuAndSetting ? 'left' : 'right'"
      v-model="defStore().config.drawerSetting"
      :width="330"
      :breakpoint="1000"
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
