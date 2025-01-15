<script setup lang="ts">
const props = defineProps(['content', 'type']);
</script>

<template>
  <div class="rounded-full text-xs w-fit bg-indigo-200 py-1 px-1.5 mr-1 mt-1">
    <p>{{ content }}</p>
  </div>
</template>
