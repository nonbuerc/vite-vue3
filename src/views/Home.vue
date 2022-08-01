<script setup>
import { ref } from 'vue'
import { date } from 'quasar'

const timeStamp = Date.now()
console.log(timeStamp)
const formattedString = date.formatDate(timeStamp, 'HH:mm:ss')
console.log(formattedString)
const text = ref('123')
const time = ref(new Date())
</script>

<template>
  <div class="full-height text-primary">
    Home
    <q-input v-model="text" label="Standard" />
    <q-time v-model="formattedString" with-seconds format24h />
  </div>
</template>
