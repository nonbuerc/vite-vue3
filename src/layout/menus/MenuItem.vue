<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: Object
})
const isShadow = ref(false)
</script>
<template>
  <q-expansion-item
    v-model="isShadow"
    :icon="props.item.meta.icon"
    :label="props.item.meta.label"
    dense-toggle
    :content-inset-level="0.3"
    :class="{ 'inset-shadow': isShadow }"
  >
    <template v-for="(v, i) in props.item.children" :key="i">
      <q-item :to="{ name: v.name }" v-if="!v.children">
        <q-item-section avatar>
          <q-icon :name="v.meta.icon" />
        </q-item-section>
        <q-item-section>{{ v.meta.label }}</q-item-section>
      </q-item>
      <MenuItem v-if="v.children" :item="v"></MenuItem>
    </template>
  </q-expansion-item>
</template>
