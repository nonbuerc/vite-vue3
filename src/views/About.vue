<script setup>
import { ref } from 'vue'

const text1 = ref('321')
</script>

<template>
  <div class="full-height">
    <q-input v-model="text1" label="Standard" />
    <div v-for="v in 100" :key="v">About {{ v }}/100</div>
  </div>
</template>

<style></style>
