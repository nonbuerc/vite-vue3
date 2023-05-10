<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
const attrs: Record<string, any> = useAttrs()

const slots: Readonly<{ [key: string]: any }> = useSlots()
</script>
<template>
  <div>
    <slot name="aa"></slot>
  </div>
  <q-btn-dropdown v-bind="attrs || {}">
    <template v-for="(slotContent, slotName) in slots" v-slot:[slotName]="scoped" :key="slotName">
      <slot :name="slotName" v-bind="scoped || {}"></slot>
    </template>
  </q-btn-dropdown>
</template>
