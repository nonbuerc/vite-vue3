<script setup>
import { ref, watch } from 'vue'
import { useQuasar, setCssVar } from 'quasar'
import { defStore } from '../store/index'
const props = defineProps({
  isReveal: Boolean
})

const emit = defineEmits(['menuToggle'])

const $q = useQuasar()
const color = ref('#1976d2')
const theme = ref('light')

watch(
  () => theme.value,
  () => {
    $q.dark.toggle()
  }
)
const change = () => {
  setCssVar('primary', color.value)
}
</script>

<template>
  <q-header v-model="props.isReveal" reveal elevated>
    <q-toolbar>
      <q-btn flat @click="() => emit('menuToggle')" round dense icon="menu" />
      <q-avatar>
        <img src="../assets/svg/logo.svg" />
      </q-avatar>
      <q-toolbar-title>Header</q-toolbar-title>

      <div class="q-gutter-md">
        <q-btn round dense icon="color_lens">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-btn-toggle
              v-model="theme"
              glossy
              :options="[
                { label: '白', value: 'light' },
                { label: '黑', value: 'dark' }
              ]"
            />
            <q-color v-model="color" @change="change" />
          </q-popup-proxy>
        </q-btn>
        <q-btn round>
          <q-avatar>
            <img src="../assets/svg/logo.svg" />
          </q-avatar>
        </q-btn>
        <q-btn round dense icon="settings" @click="defStore().changeSetting(true)" />
      </div>
    </q-toolbar>
    <!-- <q-toolbar inset>
      <q-toolbar-title> <strong>Quasar</strong> Framework </q-toolbar-title>
    </q-toolbar> -->
  </q-header>
</template>
