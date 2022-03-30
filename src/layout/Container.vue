<script setup>
const emit = defineEmits(['scroll'])

const scroll = (info) => {
    if (info.verticalPosition > 500) {
        emit('scroll', false)
    } else {
        emit('scroll', true)
    }
}
</script>
<template>
    <q-page-container>
        <q-page class="q-pa-md row inset-shadow">
            <div class="col-12 shadow-3 q-pa-sm">
                <div class="column full-height">
                    <q-scroll-area class="col" @scroll="scroll">
                        <router-view v-slot="{ Component }">
                            <transition appear enter-active-class="animated fadeInLeft">
                                <keep-alive>
                                    <component :is="Component" />
                                </keep-alive>
                            </transition>
                        </router-view>
                        <!-- <div class="full-height">
                                <router-view />
                            </div> -->
                    </q-scroll-area>
                </div>
            </div>
        </q-page>
        <!-- <q-page class="q-pa-md content">
            <div class="shadow-1">
                <router-view v-slot="{ Component }">
                    <transition appear enter-active-class="animated fadeInLeft">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </q-page> -->
    </q-page-container>
</template>
<style lang="sass" scoped></style>
