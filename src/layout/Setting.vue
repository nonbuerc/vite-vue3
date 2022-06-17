<script setup>
import { defStore } from '../store/index'
console.log(defStore())
</script>
<template>
  <q-dialog v-model="defStore().isShowSetting" position="right" maximized>
    <q-card class="column full-height" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Full Height</div>
      </q-card-section>

      <q-card-section class="col q-pt-none"> Click/Tap on the backdrop. </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style></style>
