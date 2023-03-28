<script setup lang="ts">
import { ref, useAttrs, useSlots } from 'vue'

const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
    <div>
        <slot name="aa"></slot>
    </div>
    <q-btn-dropdown v-bind="attrs || {}">
        <template v-for="(slotContent, slotName) in slots" #[slotName]="scoped" :key="slotName">
            <slot :name="slotName" v-bind="scoped || {}"></slot>
        </template>
    </q-btn-dropdown>
</template>
