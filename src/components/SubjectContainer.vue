<template>
  <div
    :style="{ backgroundColor: color }"
    class="w-10 h-10 md:h-14 md:w-14 flex justify-center items-center"
  >
    <img
      :src="icon"
      alt=""
      width="28"
      height="28"
      class="w-7 h-7 md:w-10 md:h-10"
    />
  </div>

  <h2>{{ title }}</h2>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  title: String,
  icon: String,
  color: String
});

const bgClass = computed(() => {
  return `bg-[${props.color}]`;
});
</script>
