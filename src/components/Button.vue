<script setup></script>
<template>
  <slot name="aa" />
  <q-btn-dropdown v-bind="$attrs || {}">
    <template v-for="(item, index) in Object.keys($slots)" #[item]="scoped" :key="index">
      <slot :name="item" v-bind="scoped || {}"></slot>
    </template>
  </q-btn-dropdown>
</template>
