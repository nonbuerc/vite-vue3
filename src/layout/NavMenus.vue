<script setup>
import { ref } from 'vue'

const act = ref(-999)
const navMenus = ref(10)
const sel = (i) => {
  act.value = i
}
</script>

<template>
  <q-toolbar class="inset-shadow">
    <q-tabs
      v-model="act"
      align="left"
      stretch
      shrink
      outside-arrows
      narrow-indicator
      inline-label
      dense
      content-class="q-gutter-x-sm "
    >
      <!-- <q-tab v-for="(v, i) in navMenus" :key="i" :name="i"> -->
      <q-btn-group push glossy class="text-no-wrap">
        <q-btn
          push
          :color="act === -999 ? 'primary' : ''"
          :text-color="act !== -999 ? 'primary' : ''"
          :label="`首页`"
          @click="sel(-999)"
        >
        </q-btn>
        <q-btn
          v-if="act === -999"
          push
          padding="0.2rem"
          size="0.5rem"
          text-color="primary"
          icon="refresh"
        ></q-btn>
      </q-btn-group>
      <q-btn-group push glossy class="text-no-wrap" v-for="(v, i) in navMenus" :key="i">
        <q-btn
          push
          :color="act === i ? 'primary' : ''"
          :text-color="act !== i ? 'primary' : ''"
          :label="`菜单${v}`"
          @click="sel(i)"
        >
        </q-btn>
        <q-btn
          v-if="act === i"
          push
          padding="0.2rem"
          size="0.5rem"
          text-color="primary"
          icon="refresh"
        ></q-btn>
        <q-btn push padding="0.2rem" size="0.5rem" text-color="red" icon="cancel"></q-btn>
      </q-btn-group>
      <!-- </q-tab> -->
    </q-tabs>
    <q-space />
    <q-btn flat round dense icon="more_vert" />
  </q-toolbar>
  <q-breadcrumbs class="inset-shadow q-px-md q-py-xs">
    <!-- shadow-3 -->
    <q-breadcrumbs-el icon="home" to="/" />
    <q-breadcrumbs-el label="Docs" icon="widgets" to="/" />
    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/" />
    <q-breadcrumbs-el label="Build" />
  </q-breadcrumbs>
</template>

<style lang="scss" scoped></style>
