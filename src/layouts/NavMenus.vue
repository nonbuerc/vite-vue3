<script setup lang="ts">
import { ref, watchEffect, nextTick } from 'vue'

import { defStore } from '../store/index'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const active = ref(route.name)
watchEffect(() => {
    active.value = route.name
})

const refresh = async () => {
    defStore().$patch((state: any) => (state.exclude = [...state.exclude, active.value]))
    defStore().$patch((state: any) => (state.refreshView = false))
    await nextTick()
    defStore().$patch((state: any) => (state.refreshView = true))
    defStore().$patch((state: any) => (state.exclude = state.exclude.filter((r: any) => r !== active.value)))
}

const del = () => {
    let i = defStore().navMenus.findIndex((r: any) => r.name === active.value)
    let name = ''
    if (i !== defStore().navMenus.length - 1) {
        name = defStore().navMenus[i + 1].name
    } else {
        name = defStore().navMenus[i - 1].name
    }
    if (name !== active.value) router.push({ name })

    defStore().$patch((state: any) => state.navMenus.splice(i, 1))
}
</script>

<template>
    <q-toolbar class="inset-shadow q-py-sm" v-if="defStore().config.navMenus" style="min-height: 0">
        <q-tabs
            align="left"
            stretch
            shrink
            outside-arrows
            narrow-indicator
            inline-label
            dense
            content-class="q-gutter-x-xs"
        >
            <q-btn-group class="text-no-wrap" v-for="(v, i) in defStore().navMenus" :key="i" unelevated glossy>
                <q-btn
                    :color="active === v.name ? 'primary' : undefined"
                    :label="v.label"
                    :to="{ name: v.name }"
                    size="sm"
                />
                <q-btn
                    :color="active === v.name ? 'primary' : undefined"
                    :text-color="'negative'"
                    icon="dangerous"
                    dense
                    size="sm"
                    v-if="v.name !== 'Home'"
                    @click="del()"
                />
            </q-btn-group>

            <!-- </q-tab> -->
        </q-tabs>
        <q-space />
        <q-btn icon="refresh" @click="refresh()" flat round dense size="sm" />

        <q-btn icon="more_vert" flat round dense size="sm" />
    </q-toolbar>
</template>
