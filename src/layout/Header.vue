<script setup>
import { defStore } from '../store/index'
</script>

<template>
  <q-header v-model="defStore().config.isReveal" reveal elevated>
    <q-toolbar>
      <div class="q-gutter-md">
        <q-btn
          @click="defStore().$patch((state) => (state.config.drawer = !state.config.drawer))"
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
      <q-toolbar-title> <strong>Header</strong></q-toolbar-title>

      <div class="q-gutter-md">
        <q-btn round>
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/img/avatar.png" />
            <!-- <q-img src="../assets/abc.jpg" /> -->
          </q-avatar>
        </q-btn>
        <q-btn
          round
          dense
          icon="more_vert"
          @click="
            defStore().$patch((state) => (state.config.drawerRight = !state.config.drawerRight))
          "
        />
      </div>
    </q-toolbar>
    <q-toolbar inset v-if="defStore().config.headerInset">
      <q-toolbar-title> <strong>Quasar</strong> Framework </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
