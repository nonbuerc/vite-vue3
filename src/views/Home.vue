<script setup lang="ts">
import { ref } from 'vue'
import { date } from 'quasar'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'HH:mm:ss')
const text = ref('123')
</script>

<template>
  <div class="full-height">
    Home首页
    <q-input v-model="text" label="Standard" />
    <q-time v-model="formattedString" with-seconds format24h />
    <q-btn round class="q-ml-md" glossy>
      <q-avatar>
        <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
      </q-avatar>
    </q-btn>
  </div>
</template>
