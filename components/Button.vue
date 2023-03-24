<template>
  <input type="button" :value="props.label" @click="$emit('updateVal')" />

</template>
<style>
input {
    font-size: 40px;
    width: 40px;
}
</style>
<script setup>
import { defineProps } from 'vue'

const props = defineProps(['label'])

</script>