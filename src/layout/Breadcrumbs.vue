<script setup>
import { defStore } from '../store/index'
</script>
<template>
  <q-breadcrumbs class="inset-shadow q-px-md q-py-xs" v-if="defStore().config.breadcrumbs">
    <!-- shadow-3 -->
    <q-breadcrumbs-el icon="home" to="/" />
    <q-breadcrumbs-el label="Docs" icon="widgets" to="/" />
    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/" />
    <q-breadcrumbs-el label="Build" />
  </q-breadcrumbs>
</template>
