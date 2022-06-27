<script setup>
import { ref, reactive } from 'vue'
import Slots from '../components/Slots.vue'
const show = ref(false)
const text = ref('123')

const num = 5
</script>
<template>
  <div class="full-height text-primary">
    Home
    <q-input v-model="text" label="Standard" />

    <Slots>
      <template #cc2>我是插槽2</template>

      <template #cc3="{ text, hh }">
        <div @click="aaa()">
          {{ text }}
          <h6>{{ hh }}</h6>
        </div>
      </template>
      <div v-if="show">我是插槽1</div>
    </Slots>
  </div>
</template>

<style lang="sass" scoped>
.abc div
    width: 100px
    height: 100px
    background: red
</style>
