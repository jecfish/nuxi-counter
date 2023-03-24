<template>
  <section>
    <Button label="-" @updateVal="decrement()" />
    <Label :counter="counter" />
    <Button label="+" @updateVal="increment()" />
  </section>
</template>
<script setup>
import { defineProps, ref } from 'vue'

const counter = ref(0);

const props = defineProps(['counter']);

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function increment() {
    await Promise.resolve().then(() => timeout(100));

    let x;

    try {
      const numRes = await fetch('/random-number').then((n) => {
        if (n.status === 404) throw new Error('wrong url');
        return n;
      });

      x = await numRes.text().catch((err) => {
        throw err;
      });
    } finally {
      counter.value = counter.value + (+x || 1);
      // console.trace('incremented');
    }
  }

async function decrement() {
    await Promise.resolve().then(() => timeout(100));
    counter.value --;
    throw new Error('not decremented');
  }
</script>
<style>
section {
  display: flex;
  gap: 20px;
  justify-content: center;
  min-height: 90vh;
  align-items: center;
  font-size: 40px;
}
</style>
