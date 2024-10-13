<template>
  <div class="text-center">
    <h1 class="text-2xl font-bold">Counter: {{ count }}</h1>
    <button class="bg-blue-500 text-white px-4 py-2" @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter.ts';

const store = useCounterStore();
const { count } = storeToRefs(store);
const { increment } = store;
</script>