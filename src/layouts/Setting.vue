<script setup lang="ts">
import { reactive, watch, computed } from 'vue'

import { setCssVar } from 'quasar'

import { defStore } from '../store/index'

//布局
const groups = reactive(defStore().config.view.replace(/ /g, '').split(''))
const options = [
    [
        {
            label: 'l',
            value: 'l'
        },
        {
            label: 'h',
            value: 'h'
        }
    ],
    [
        {
            label: 'h',
            value: 'h'
        },
        {
            label: 'H',
            value: 'H'
        }
    ],
    [
        {
            label: 'r',
            value: 'r'
        },
        {
            label: 'h',
            value: 'h'
        }
    ],
    [
        {
            label: 'l',
            value: 'l'
        },
        {
            label: 'L',
            value: 'L'
        }
    ],
    [
        {
            label: 'page',
            value: 'page'
        }
    ],
    [
        {
            label: 'r',
            value: 'r'
        },
        {
            label: 'R',
            value: 'R'
        }
    ],
    [
        {
            label: 'l',
            value: 'l'
        },
        {
            label: 'f',
            value: 'f'
        }
    ],
    [
        {
            label: 'f',
            value: 'f'
        },
        {
            label: 'F',
            value: 'F'
        }
    ],
    [
        {
            label: 'r',
            value: 'r'
        },
        {
            label: 'f',
            value: 'f'
        }
    ]
]
//布局
watch(
    () => groups,
    (data) => {
        defStore().$patch((state: any) => (state.config.view = data.join('').replace(/(.{3})/g, '$1 ')))
    },
    {
        deep: true
    }
)
const bgColor = computed(() => {
    return (v: any, flag?: any) => {
        let bgColor = 'transparent'
        let height = '50px'
        if ([1, 2, 3].includes(v)) {
            bgColor = 'bg-primary'
            if (v === 1 && groups[0] === 'l') {
                bgColor = 'bg-teal-12'
            }
            if (v === 3 && groups[2] === 'r') {
                bgColor = 'bg-teal-12'
            }
        }
        if ([4, 5, 6].includes(v)) {
            height = '100px'
            if (v !== 5) {
                bgColor = 'bg-teal-12'
            }
        }
        if ([7, 8, 9].includes(v)) {
            bgColor = 'bg-purple-3'
            if (v === 7 && groups[6] === 'l') {
                bgColor = 'bg-teal-12'
            }
            if (v === 9 && groups[8] === 'r') {
                bgColor = 'bg-teal-12'
            }
        }
        if (flag) {
            return bgColor
        } else {
            return { height: `${height} !important` }
        }
    }
})

//主题色
setCssVar('primary', defStore().config.primary)
watch(
    () => defStore().config.primary,
    (data) => setCssVar('primary', data)
)
//菜单
watch(
    () => defStore().config.showMenu,
    (data) => defStore().$patch((state: any) => (state.config.drawerMenu = data ? true : false))
)
//设置
watch(
    () => defStore().config.showDrawerSetting,
    (data) => defStore().$patch((state: any) => (state.config.drawerSetting = data ? true : false))
)
</script>
<template>
    <!-- <q-dialog v-model="defStore().config.drawerSetting" position="right" maximized> -->
    <!-- <q-card class="fit q-pa-sm"> -->
    <q-list dense>
        <q-item>
            <q-item-section class="text-primary"> 布局 </q-item-section>
        </q-item>
        <q-item>
            <div class="row q-pa-sm inset-shadow">
                <div class="col-4" v-for="(v, i) in 9" :key="i">
                    <div class="fit column items-center justify-center" :class="bgColor(v, true)" :style="bgColor(v)">
                        <q-option-group
                            v-if="v !== 5"
                            v-model="groups[i]"
                            :options="options[i]"
                            inline
                            dense
                            size="xs"
                            color="white "
                        />
                        <div v-else>{{ options[i][0].label }}</div>
                    </div>
                </div>
            </div>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary">主题色</q-item-section>
            <q-item-section avatar>
                <q-btn round push color="primary">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-color v-model="defStore().config.primary" />
                    </q-popup-proxy>
                </q-btn>
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary"> 菜单位置 </q-item-section>
            <q-item-section avatar>
                <q-btn-toggle
                    v-model="defStore().config.menuPosition"
                    glossy
                    size="sm"
                    :options="[
                        { label: 'All', value: 'all' },
                        { label: 'Left', value: 'left' },
                        { label: 'Header', value: 'header' }
                    ]"
                />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary">SwapMenuAndSetting</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.swapMenuAndSetting" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary">HeaderInset</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.headerInset" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary">NavMenu</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.navMenus" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary">Breadcrumbs</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.breadcrumbs" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item>
            <q-item-section class="text-primary">showMenu</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.showMenu" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <!-- <q-item>
            <q-item-section class="text-primary">ShowDrawerSetting</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.showDrawerSetting" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset /> -->

        <q-item>
            <q-item-section class="text-primary">Footer</q-item-section>
            <q-item-section avatar>
                <q-toggle v-model="defStore().config.footer" />
            </q-item-section>
        </q-item>
        <q-separator spaced inset />
    </q-list>
    <!-- </q-card> -->
    <!-- </q-dialog> -->
</template>
