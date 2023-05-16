<script setup lang="ts">
import MenuItem from './MenuItem.vue'

const props = withDefaults(
  defineProps<{
    routes?: readonly any[]
    selMenu?: any[]
    mode?: string
    mini?: boolean
    dense?: boolean
  }>(),
  {
    routes: () => [],
    selMenu: () => [],
    mode: 'vertical',
    mini: false,
    dense: false
  }
)
const onSetMini = async () => {
  emit('update:mini', !props.mini)
}

const emit = defineEmits(['update:mini'])
</script>
<template>
  <template v-if="mode === 'vertical'">
    <q-list :dense="dense">
      <template v-for="(v, i) in props.routes" :key="i">
        <template v-if="!v.children">
          <transition-group
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated hidden"
          >
            <template v-if="!mini">
              <q-item
                :dense="dense"
                v-ripple
                active-class="bg-primary text-white glossy"
                :to="{ name: v.name }"
              >
                <q-item-section avatar>
                  <q-icon :name="v.meta.icon" />
                </q-item-section>
                <q-item-section>
                  {{ v.meta.label }}
                </q-item-section>
              </q-item>
            </template>

            <template v-if="mini">
              <q-item
                :dense="dense"
                v-ripple
                active-class="bg-primary text-white glossy"
                :to="{ name: v.name }"
              >
                <q-item-section avatar class="fit column items-center cursor-pointer">
                  <q-icon :name="v.meta.icon" />
                  <q-tooltip
                    anchor="center right"
                    self="center left"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    {{ v.meta.label }}
                  </q-tooltip>
                  <div>
                    {{ v.meta.label }}
                  </div>
                </q-item-section>
              </q-item>
            </template>
          </transition-group>
        </template>

        <template v-if="v.children">
          <MenuItem :item="v" :selMenu="selMenu" :key="v.name" :mode="mode" :mini="mini"></MenuItem
        ></template>
      </template>
    </q-list>

    <div class="full-width fixed-bottom-left" v-if="!$q.platform.is.mobile">
      <q-btn
        class="full-width"
        flat
        color="primary"
        size="sm"
        :icon="mini ? 'keyboard_double_arrow_right' : 'keyboard_double_arrow_left'"
        @click="onSetMini()"
      />
    </div>
  </template>

  <template v-if="mode === 'horizontal'">
    <q-tabs
      inline-label
      outside-arrows
      mobile-arrows
      align="left"
      active-class="bg-primary text-white glossy"
    >
      <template v-for="(v, i) in props.routes" :key="i">
        <template v-if="!v.children">
          <q-route-tab
            v-if="!v.children"
            :to="{ name: v.name }"
            :icon="v.meta.icon"
            :label="v.meta.label"
          >
          </q-route-tab>
        </template>
        <template v-if="v.children">
          <MenuItem :item="v" :selMenu="selMenu" :key="v.name" :mode="mode"></MenuItem>
        </template>
      </template>
    </q-tabs>
  </template>
</template>
