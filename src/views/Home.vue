<script setup>
import { ref, reactive } from 'vue'
import Slots from '../components/Slots.vue'
const curIdx = ref(0)
const show = ref(false)

const next = () => {
  curIdx.value++
}

const arr = reactive([1, 2, 3, 4, 5])
const a = () => {
  let num = 4 - parseInt(arr.length % 4)
  // console.log(num)

  for (let i = 0; i < num; i++) {
    arr.push(0)
  }
}
a()
// console.log(arr)

const num = 5
</script>
<template>
  <div class="full-height text-primary">
    Home
    <div>{{ num }}------{{ 4 - parseInt(num % 4) }}</div>
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
    <div class="abc">
      <transition-group appear enter-active-class="animated fadeIn">
        <div v-for="v in 4" :key="v" v-show="v - 1 == curIdx">{{ v }}</div>
      </transition-group>
    </div>
    <div @click="next()">下一步</div>
  </div>
</template>

<style lang="sass" scoped>
.home
    .abc div
        width: 100px
        height: 100px
        background: red
</style>
