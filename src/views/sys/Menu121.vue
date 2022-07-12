<script setup>
import { onMounted, ref } from 'vue'

const text1 = ref('321')
onMounted(() => {
  console.log(123)
})
</script>
<template>
  <div style="height: 100px">
    菜单1-2-1
    <q-input v-model="text1" label="Standard" />
  </div>
</template>
