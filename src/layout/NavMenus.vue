<script setup>
import { ref, watch, nextTick } from 'vue'

import { defStore } from '../store/index'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const active = ref(route.name)
watch(
  () => route.name,
  () => {
    active.value = route.name
  }
)

const refresh = (v) => {
  defStore().$patch((state) => (state.exclude = [...state.exclude, v.name]))
  defStore().$patch((state) => (state.refreshView = false))
  nextTick(() => {
    defStore().$patch((state) => (state.refreshView = true))
    defStore().$patch((state) => (state.exclude = state.exclude.filter((r) => r !== v.name)))
  })
}

const del = (i) => {
  let name = ''
  if (i !== defStore().navMenus.length - 1) {
    name = defStore().navMenus[i + 1].name
  } else {
    name = defStore().navMenus[i - 1].name
  }
  if (name !== active.value) router.push({ name })

  defStore().$patch((state) => state.navMenus.splice(i, 1))
}
</script>

<template>
  <q-toolbar class="inset-shadow" v-if="defStore().config.navMenus">
    <q-tabs
      align="left"
      stretch
      shrink
      outside-arrows
      narrow-indicator
      inline-label
      dense
      content-class="q-gutter-x-sm "
    >
      <q-btn-group push glossy class="text-no-wrap" v-for="(v, i) in defStore().navMenus" :key="i">
        <q-btn
          push
          :color="active === v.name ? 'primary' : ''"
          :text-color="active !== v.name ? 'primary' : ''"
          :label="v.label"
          :to="{ name: v.name }"
        />

        <q-btn
          v-if="active === v.name"
          push
          padding="0.2rem"
          size="0.5rem"
          text-color="primary"
          icon="refresh"
          @click="refresh(v)"
        />

        <q-btn
          v-if="v.name !== 'Home'"
          push
          padding="0.2rem"
          size="0.5rem"
          text-color="red"
          icon="cancel"
          @click="del(i)"
        />
      </q-btn-group>
      <!-- </q-tab> -->
    </q-tabs>
    <q-space />
    <q-btn flat round dense icon="more_vert" />
  </q-toolbar>
</template>
