<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  item: Object,
  selMenu: {
    type: Array,
    default: () => []
  },
  mode: {
    type: String,
    default: 'horizontal'
  },
  mini: {
    type: Boolean,
    default: false
  }
})
const expanded = ref(false)
watch(
  () => props.selMenu,
  (v) => {
    //只打开一个
    expanded.value = v?.some((r) => r === props.item.name)
    // if (v?.some((r) => r === props.item.name))
    //   expanded.value = v?.some((r) => r === props.item.name)
  }
)
</script>
<template>
  <!-- vertical -->
  <template v-if="mode === 'vertical'">
    <q-expansion-item
      v-model="expanded"
      :icon="item.meta.icon"
      :label="item.meta.label"
      dense-toggle
      :expanded-icon="mini ? 'arrow_right' : undefined"
      :expand-icon="mini ? 'arrow_right' : undefined"
      :content-inset-level="0.3"
      :class="{ 'inset-shadow': expanded && !mini }"
      :header-class="{ 'text-primary': expanded || selMenu.includes(item.name) }"
      :auto-close="false"
    >
      <template #header v-if="mini">
        <q-item-section avatar>
          <q-icon :name="item.meta.icon" :color="selMenu.includes(item.name) ? 'primary' : ''" />
        </q-item-section>
        <q-item-section :class="{ 'text-primary': selMenu.includes(item.name) }"
          >{{ item.meta.label }}
        </q-item-section>
        <q-menu anchor="top right" transition-show="scale" transition-hide="scale">
          <template v-for="(v, i) in item.children" :key="i">
            <template v-if="!v.children">
              <q-item v-ripple active-class="bg-primary text-white" :to="{ name: v.name }">
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
              ></MenuItem>
            </template>
          </template>
        </q-menu>
      </template>

      <template v-if="!mini">
        <template v-for="(v, i) in item.children" :key="i">
          <template v-if="!v.children">
            <q-item v-ripple active-class="bg-primary text-white" :to="{ name: v.name }">
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
      </template>
    </q-expansion-item>
  </template>

  <!-- horizontal -->

  <template v-if="mode === 'horizontal'">
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
              active-class="bg-primary text-white"
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
