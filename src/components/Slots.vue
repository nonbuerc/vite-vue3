<script setup lang="ts"></script>

<template>
    <div>
        <h1>插槽</h1>
        <h2>插槽1<slot /></h2>
        <h3>插槽2<slot name="cc2" /></h3>
        <h4>插槽3<slot name="cc3" :text="'我是插槽3'" :hh="'哈哈哈'" /></h4>
    </div>
</template>
