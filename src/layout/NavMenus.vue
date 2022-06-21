<script setup>
import { ref } from 'vue'

import { defStore } from '../store/index'

const act = ref(-999)
const navMenus = ref(10)

const change = (i) => {
  act.value = i
}
</script>

<template>
  <q-toolbar class="inset-shadow" v-if="defStore().config.navMenus">
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
          @click="change(-999)"
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
          @click="change(i)"
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
</template>

<style lang="scss" scoped></style>
