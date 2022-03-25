<script setup>
import MenuItem from './MenuItem.vue'
const menus = [
    {
        label: '首页',
        name: 'Home',
        icon: 'home'
    },
    {
        label: '关于',
        name: 'About',
        icon: 'star'
    },
    {
        label: '菜单',
        name: '',
        icon: 'star',
        children: [
            {
                label: '菜单1',
                name: '1',
                icon: 'star',
                children: [
                    {
                        label: '菜单1-1',
                        name: '1-1',
                        icon: 'star'
                    },
                    {
                        label: '菜单1-2',
                        name: '1-2',
                        icon: 'star',
                        children: [
                            {
                                label: '菜单1-2-1',
                                name: '1-1',
                                icon: 'star'
                            },
                            {
                                label: '菜单1-2-2',
                                name: '1-2',
                                icon: 'star'
                            }
                        ]
                    }
                ]
            },
            {
                label: '菜单2',
                name: '2',
                icon: 'star'
            }
        ]
    }
]
</script>
<template>
    <q-list>
        <template v-for="(v, i) in menus" :key="i">
            <q-item :to="{ name: v.name }" v-if="!v.children">
                <q-item-section avatar>
                    <q-icon :name="v.icon" />
                </q-item-section>
                <q-item-section>{{ v.label }}</q-item-section>
            </q-item>
            <MenuItem v-if="v.children" :item="v"></MenuItem>
        </template>
    </q-list>
</template>
