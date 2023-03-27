<script setup lang="ts"></script>
<template>
    <slot name="aa" />
    <q-btn-dropdown v-bind="$attrs || {}">
        <template v-for="(slotContent, slotName) in $slots" #[slotName]="scoped" :key="slotName">
            <slot :name="slotName" v-bind="scoped || {}"></slot>
        </template>
    </q-btn-dropdown>
</template>
