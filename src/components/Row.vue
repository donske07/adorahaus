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
    class="w-4/5 py-4 space-y-4 text-center border-b border-gray-300 hover:opacity-70"
  >
    <div @click="toggle" class="cursor-pointer flex justify-between">
      <h1 class="text-left">{{ service.name }} *</h1>
      <div class="flex space-x-5">
        <h1 class="italic">
          <span class="text-md">from</span> ${{ service.price }}
        </h1>
        <span>+</span>
      </div>
    </div>
    <div v-show="!close">
      <p class="text-xl text-left">{{ service.description }}</p>
    </div>
  </div>
</template>
