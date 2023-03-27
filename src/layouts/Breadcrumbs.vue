<script setup lang="ts">
import { defStore } from '../store/index'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
    <q-breadcrumbs class="inset-shadow q-px-md q-py-xs" v-if="defStore().config.breadcrumbs">
        <!-- shadow-3 -->
        <q-breadcrumbs-el
            v-for="(v, i) in route.matched"
            :label="v.meta.label as string"
            :icon="v.meta.icon as string"
            :to="{ name: v.name }"
            :key="i"
        />
    </q-breadcrumbs>
</template>
