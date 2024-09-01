<script setup lang="ts">
import { ref } from "vue";
defineProps({
  service: Object,
});

const close = ref(true);
const toggle = () => {
  close.value = !close.value;
};
</script>
<template>
  <div
    class="w-4/5 py-2 space-y-2 text-center border-b border-gray-300 hover:opacity-80"
  >
    <div class="flex justify-between font-black">
      <h1 class="text-2xl text-left">{{ service.name }}</h1>
    </div>
    <div>
      <p class="text-lg text-left font-thin">{{ service.description }}</p>
    </div>
  </div>
</template>
