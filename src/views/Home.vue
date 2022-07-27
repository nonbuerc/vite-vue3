<script setup>
import { ref } from 'vue'
import Slots from '../components/Slots.vue'
import Button from '../components/Button.vue'
const show = ref(false)
const loading = ref(false)
const text = ref('123')

const onMainClick = (e) => {
  // console.log('Clicked on main button',e)
}

const onItemClick = (e) => {
  // console.log('Clicked on an Item',e)
}
</script>
<template>
  <div class="full-height text-primary">
    Home
    <q-input v-model="text" label="Standard" />
    <Button split color="cyan" push no-caps @show="onMainClick">
      <template #aa> 二次封装模板 </template>
      <template #label>
        <div class="row items-center no-wrap">
          <q-icon left name="map" />
          <div class="text-center">useAttrs<br />useSlots</div>
        </div>
      </template>

      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="assignment" color="secondary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Vacation</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>
      </q-list>
    </Button>
    <Slots>
      <template #cc2>我是插槽2</template>

      <template #cc3="{ text, hh }">
        <div @click="aaa()">
          {{ text }}
          <h6>{{ hh }}</h6>
        </div>
      </template>
      <div v-if="show">我是插槽1</div>
    </Slots>
  </div>
</template>

<style lang="sass" scoped>
.abc div
    width: 100px
    height: 100px
    background: red
</style>
