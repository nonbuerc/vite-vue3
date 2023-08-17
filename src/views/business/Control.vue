<script setup lang="ts">
import { ref } from 'vue'
import { useMergePic } from '@/plugins/utils'
// import { date } from 'quasar'

// const timeStamp = Date.now()
// const formattedString = date.formatDate(timeStamp, 'HH:mm:ss')
// const text = ref('123')

const dataUrl = ref('')
const onMerge = async () => {
  // img1Obj.src = await getImageUrl('http://192.168.0.165:3690/src/assets/1.jpg')
  // img2Obj.src = await getImageUrl('http://192.168.0.165:3690/src/assets/logo.png')
  dataUrl.value = await useMergePic({
    img1: 'https://pic4.zhimg.com/v2-76f454cdbfe8804a95c245c3f844da27_b.jpg',
    obj: {
      src: 'https://pic2.zhimg.com/v2-e87cea2b32ea4c180471d17bfae5c725_b.jpg',
      x: 130,
      y: 130,
      width: 80,
      height: 80
    }
  })
  console.log(dataUrl.value)
}

// const convertImageToBase64 = async (imageUrl: string) => {
//   const buffer = await fetch(imageUrl).then((response) => response.arrayBuffer())
//   const base64Image = btoa(
//     new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
//   )
//   // console.log(base64Image)
//   return 'data:image/jpg;base64,' + base64Image
// }
</script>

<template>
  <div class="full-height">
    Control控制台
    <img
      src="https://pic4.zhimg.com/v2-76f454cdbfe8804a95c245c3f844da27_b.jpg"
      alt=""
      width="500"
    />
    <img
      src="https://pic2.zhimg.com/v2-e87cea2b32ea4c180471d17bfae5c725_b.jpg"
      alt=""
      width="500"
    />
    <div class="q-ml-md">
      <q-btn glossy @click="onMerge">合成</q-btn>
    </div>
    <img v-if="dataUrl" :src="dataUrl" alt="asdasdas" />
    <!-- <img src="../../assets/1.jpg" alt="" /> -->

    <!-- <q-input v-model="text" label="Standard" />
    <q-time v-model="formattedString" with-seconds format24h />
    <q-btn round class="q-ml-md" glossy>
      <q-avatar>
        <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
      </q-avatar>
    </q-btn> -->
  </div>
</template>
