<script setup lang="ts">
import { ref } from 'vue'

const text1 = ref('321')
</script>
<template>
    <div style="height: 100px">
        菜单1-2-2

        <q-input v-model="text1" label="Standard" />
    </div>
</template>
