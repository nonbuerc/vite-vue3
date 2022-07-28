<script setup>
import Slots from '../components/Slots.vue'
</script>
<template>
  <Slots>
    <template #cc2>我是插槽2</template>
    <template #cc3="{ text, hh }">
      <div>
        {{ text }}
        <h6>{{ hh }}</h6>
      </div>
    </template>
    <div>我是插槽1</div>
  </Slots>
</template>
<style></style>
