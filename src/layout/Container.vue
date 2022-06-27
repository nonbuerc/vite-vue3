<script setup>
import { NavMenus, Breadcrumbs } from './index'

import { defStore } from '../store/index'
</script>
<template>
  <q-page-container>
    <q-page class="row inset-shadow q-px-sm q-pt-sm">
      <div class="col-12">
        <div class="column full-height q-pa-sm inset-shadow">
          <NavMenus />
          <Breadcrumbs />
          <q-scroll-area
            class="col full-height inset-shadow q-px-sm q-pt-sm"
            :content-style="{ height: '100%' }"
            @scroll="
              (info) =>
                defStore().$patch(
                  (state) => (state.config.isReveal = info.verticalPosition > 500 ? false : true)
                )
            "
          >
            <div class="fit">
              <q-spinner-bars color="primary" size="xl" class="absolute-center" v-if="false" />
              <router-view v-slot="{ Component, route }">
                <!-- route -->
                <transition appear enter-active-class="animated fadeInLeft">
                  <keep-alive :exclude="defStore().exclude">
                    <component :is="Component" :key="route.name" />
                  </keep-alive>
                </transition>
              </router-view>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
<style lang="sass" scoped></style>
