<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  item: Object,
  defOpen: {
    type: Array,
    default: () => []
  }
})
const expanded = ref(false)
watchEffect(() => {
  if (props.defOpen?.some((r) => r === props.item.name))
    expanded.value = props.defOpen?.some((r) => r === props.item.name)
})
</script>
<template>
  <q-expansion-item
    v-model="expanded"
    :icon="props.item.meta.icon"
    :label="props.item.meta.label"
    dense-toggle
    :content-inset-level="0.3"
    :class="{ 'inset-shadow': expanded }"
    :header-class="{ 'text-primary': expanded }"
  >
    <template v-for="(v, i) in props.item.children" :key="i">
      <q-item
        v-ripple
        active-class="bg-primary text-white"
        :to="{ name: v.name }"
        v-if="!v.children"
      >
        <q-item-section avatar>
          <q-icon :name="v.meta.icon" />
        </q-item-section>
        <q-item-section>{{ v.meta.label }}</q-item-section>
      </q-item>
      <MenuItem v-if="v.children" :item="v" :defOpen="defOpen"></MenuItem>
    </template>
  </q-expansion-item>
</template>
