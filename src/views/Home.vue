<script setup>
import { ref } from 'vue'

const show = ref(false)
const text = ref('123')
</script>

<template>
  <div class="full-height text-primary">
    Home
    <q-input v-model="text" label="Standard" />
  </div>
</template>
