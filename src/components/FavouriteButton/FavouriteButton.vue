<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe.ts';

import { HeartIcon } from '@heroicons/vue/24/solid';

const props = defineProps(['id', 'favourite', 'inactive']);

const recipeStore = useRecipeStore();
</script>

<template>
  <div
    class="absolute top-2 right-2"
    @click="inactive ? null : recipeStore.toggleRecipeAsFavourite(id)"
  >
    <HeartIcon class="size-8 text-gray-500 relative" :class="{ 'text-red-500': favourite }" />
  </div>
</template>
