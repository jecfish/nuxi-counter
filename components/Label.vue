<template>
  <span :class="{red: isNegative}">{{counter}}</span>
</template>
<style>
.red {color: red; }
</style>
<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps(['counter']);

const isNegative = computed(() => {
  return props.counter < 0;
})
</script>