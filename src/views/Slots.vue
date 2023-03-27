<script setup lang="ts">
import Slots from '../components/Slots.vue'
</script>
<template>
    <Slots>
        <div>我是插槽1</div>
        <template #cc2>我是插槽2</template>
        <template #cc3="{ text, hh }">
            <div>
                {{ text }}
                <h6>{{ hh }}</h6>
            </div>
        </template>
    </Slots>
</template>
