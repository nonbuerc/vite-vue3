<script setup lang="ts">
import TwoPackagingComponents from '../components/TwoPackagingComponents.vue'
const onMainClick = (e: any) => {
    console.log('Clicked on main button', e)
}

const onItemClick = async () => {
    // let res = await WeiXinList()
    // console.log(res)
    // console.log('Clicked on an Item',e)
}
</script>
<template>
    <div class="fit">
        <TwoPackagingComponents split color="primary" push no-caps @show="onMainClick">
            <template v-slot:aa>二次封装模板</template>
            <template v-slot:label>
                <div class="row items-center no-wrap">
                    <q-icon left name="map"></q-icon>
                    <div class="text-center">useAttrs/useSlots</div>
                </div>
            </template>
            <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section avatar>
                        <q-avatar icon="folder" color="primary" text-color="white"> </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Photos</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                    </q-item-section>
                    <q-item-section side><q-icon name="info" color="amber"></q-icon> </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section avatar>
                        <q-avatar icon="assignment" color="secondary" text-color="white"> </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Vacation</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                    </q-item-section>
                    <q-item-section side> <q-icon name="info" color="amber"></q-icon></q-item-section>
                </q-item>
            </q-list>
        </TwoPackagingComponents>
    </div>
</template>
