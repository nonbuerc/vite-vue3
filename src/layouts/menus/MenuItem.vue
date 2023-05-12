<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    item?: any
    selMenu?: any[]
    mode?: string
    mini?: boolean
    dense?: boolean
    inCount?: number
  }>(),
  {
    item: () => ({}),
    selMenu: () => [],
    mode: 'vertical',
    mini: false,
    dense: false,
    inCount: 0
  }
)
const expanded = ref(false)

watch(
  () => props.selMenu,
  (v) => {
    //只打开一个
    expanded.value = v?.includes(props.item?.name)
    // if (v?.some((r) => r === props.item.name))
    //   expanded.value = v?.includes(props.item?.name)
  }
)
</script>
<template>
  <!-- vertical -->
  <template v-if="mode === 'vertical'">
    <transition-group enter-active-class="animated fadeInLeft" leave-active-class="animated hidden">
      <template v-if="!mini">
        <q-expansion-item
          :dense="dense"
          v-model="expanded"
          :icon="item.meta.icon"
          :label="item.meta.label"
          dense-toggle
          :content-inset-level="0.3"
          :class="{ 'inset-shadow ': expanded }"
          :header-class="{ 'text-primary': expanded || selMenu.includes(item.name) }"
          :auto-close="false"
        >
          <template v-for="(v, i) in item.children" :key="i">
            <template v-if="!v.children">
              <q-item
                :dense="dense"
                v-ripple
                active-class="bg-primary text-white glossy"
                :to="{ name: v.name }"
              >
                <q-item-section avatar>
                  <q-icon :name="v.meta.icon" />
                </q-item-section>
                <q-item-section>{{ v.meta.label }}</q-item-section>
              </q-item>
            </template>
            <template v-if="v.children">
              <MenuItem :item="v" :selMenu="selMenu" :key="item.name" :mode="mode"></MenuItem>
            </template>
          </template>
        </q-expansion-item>
      </template>

      <template v-if="mini">
        <q-item :dense="dense" v-ripple active-class="bg-primary text-white glossy">
          <template v-if="inCount === 0">
            <q-item-section
              avatar
              class="fit column items-center cursor-pointer"
              :class="{ 'text-primary': selMenu.includes(item.name) }"
            >
              <q-icon
                :name="item.meta.icon"
                :color="selMenu.includes(item.name) ? 'primary' : ''"
              />
              <q-tooltip
                anchor="center right"
                self="center left"
                transition-show="scale"
                transition-hide="scale"
              >
                {{ item.meta.label }}
              </q-tooltip>
              <div>{{ item.meta.label }}</div>
            </q-item-section>
          </template>

          <template v-if="inCount > 0">
            <q-item-section avatar class="cursor-pointer">
              <q-icon
                :name="item?.meta.icon"
                :color="selMenu.includes(item.name) ? 'primary' : ''"
              />
            </q-item-section>
            <q-item-section
              class="cursor-pointer"
              :class="{ 'text-primary': selMenu.includes(item.name) }"
              >{{ item.meta.label }}
            </q-item-section>
            <q-item-section side class="cursor-pointer">
              <q-icon :color="selMenu.includes(item.name) ? 'primary' : ''" name="arrow_right" />
            </q-item-section>
          </template>

          <q-menu anchor="top right" transition-show="scale" transition-hide="scale">
            <template v-for="(v, i) in item.children" :key="i">
              <template v-if="!v.children">
                <q-item
                  :dense="dense"
                  v-ripple
                  active-class="bg-primary text-white glossy"
                  :to="{ name: v.name }"
                >
                  <q-item-section avatar>
                    <q-icon :name="v.meta.icon" />
                  </q-item-section>
                  <q-item-section>{{ v.meta.label }}</q-item-section>
                </q-item>
              </template>
              <template v-if="v.children">
                <MenuItem
                  :item="v"
                  :selMenu="selMenu"
                  :key="item.name"
                  :mode="mode"
                  :mini="mini"
                  :inCount="inCount + 1"
                ></MenuItem>
              </template>
            </template>
          </q-menu>
        </q-item>
      </template>
    </transition-group>
  </template>

  <!-- horizontal -->

  <template v-if="mode === 'horizontal'">
    <!-- <q-route-tab
      :icon="item.meta.icon"
      :label="item.meta.label"
      :class="{ 'text-primary': selMenu.includes(item?.name) }"
    >
      <q-menu>
        <q-tabs
          inline-label
          outside-arrows
          mobile-arrows
          align="left"
          active-class="bg-primary text-white"
        >
          <template v-for="(v, i) in item?.children" :key="i">
            <template v-if="!v.children">
              <q-route-tab
                active-class="bg-primary text-white glossy"
                :to="{ name: v.name }"
                :icon="v.meta.icon"
                :label="v.meta.label"
                flat
              >
              </q-route-tab>
            </template>
            <template v-if="v.children">
              <MenuItem :item="v" :selMenu="selMenu" :key="item?.name" :mode="mode"></MenuItem>
            </template>
          </template>
        </q-tabs>
      </q-menu>
    </q-route-tab> -->
    <q-btn-dropdown
      class="full-height"
      flat
      :icon="item.meta.icon"
      :label="item.meta.label"
      :menu-anchor="'bottom left'"
      :menu-self="'top left'"
      :auto-close="false"
      :class="{ 'text-primary': selMenu.includes(item.name) }"
    >
      <q-tabs
        inline-label
        outside-arrows
        mobile-arrows
        align="left"
        active-class="bg-primary text-white"
      >
        <template v-for="(v, i) in item.children" :key="i">
          <template v-if="!v.children">
            <q-route-tab
              active-class="bg-primary text-white glossy"
              :to="{ name: v.name }"
              :icon="v.meta.icon"
              :label="v.meta.label"
              flat
            >
            </q-route-tab>
          </template>
          <template v-if="v.children">
            <MenuItem :item="v" :selMenu="selMenu" :key="item.name" :mode="mode"></MenuItem>
          </template>
        </template>
      </q-tabs>
    </q-btn-dropdown>
  </template>
</template>
