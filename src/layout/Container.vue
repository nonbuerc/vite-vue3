<script setup>
import { NavMenus, Breadcrumbs, BlankView } from './index'

import { defStore } from '../store/index'
</script>
<template>
  <q-page-container>
    <q-page class="row inset-shadow q-px-sm q-pt-sm">
      <div class="col-12">
        <div class="column full-height q-pa-sm inset-shadow">
          <NavMenus />
          <Breadcrumbs />

          <div class="col full-height inset-shadow q-px-sm q-pt-sm">
            <q-spinner-bars color="primary" size="xl" class="absolute-center" v-if="false" />
            <q-scroll-area
              class="fit"
              :content-style="{ height: '100%' }"
              @scroll="
                (info) =>
                  defStore().$patch(
                    (state) => (state.config.isReveal = info.verticalPosition > 500 ? false : true)
                  )
              "
            >
              <!-- :content-style="{ height:containerScrollAcrollContent }" -->
              <BlankView />
            </q-scroll-area>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
