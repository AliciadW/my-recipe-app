<script setup lang="ts">
import type { PillButtonType } from '@/types/ComponentTypes.ts';

import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe.ts';

import { HeartIcon } from '@heroicons/vue/24/solid';
import PillButton from '@/components/basic/PillButton/PillButton.vue';

const route = useRoute();
const recipeStore = useRecipeStore();

recipeStore.getSingleRecipe(route.params.id as string);

const { recipe } = storeToRefs(recipeStore);

const pillButtons: PillButtonType[] = [
  {
    content: recipe?.cuisine,
    type: 'cuisine',
  },
  {
    content: recipe?.servings,
    type: 'servings',
  },
  {
    content: recipe?.difficulty,
    type: 'difficulty',
  },
  {
    content: `${recipe?.caloriesPerServing} calories`,
    type: 'calories',
  },
];
</script>

<template>
  <main class="flex h-100">
    <div class="flex flex-col">
      <h2 class="text-2xl mb-3">{{ recipe?.name }}</h2>

      <div
        class="relative w-fit cursor-pointer"
        @click="recipeStore.toggleRecipeAsFavourite(recipe?.id)"
      >
        <img class="w-32 md:w-72 rounded-sm mb-3" :src="recipe?.image" alt="" />
        <div class="absolute top-2 right-2">
          <HeartIcon
            class="size-8 text-gray-500 relative"
            :class="{ 'text-red-500': recipe?.favourite }"
          />
        </div>
      </div>

      <div class="flex flex-wrap mb-3">
        <PillButton
          v-for="(pillButton, i) in pillButtons"
          :key="i"
          :content="pillButton.content"
          :type="pillButton.type"
        />
      </div>

      <h3 class="font-bold mb-1">Prep time: {{ recipe?.prepTimeMinutes }} minutes</h3>
      <h3 class="font-bold mb-3">Cook time: {{ recipe?.cookTimeMinutes }} minutes</h3>

      <div class="mb-3">
        <h3 class="font-bold">Ingredients</h3>
        <ul>
          <li class="list-disc ml-3.5" v-for="(ingredient, i) in recipe?.ingredients" :key="i">
            {{ ingredient }}
          </li>
        </ul>
      </div>

      <div class="mb-3">
        <h3 class="font-bold">Method</h3>
        <ul>
          <li class="list-disc ml-3.5" v-for="(instruction, i) in recipe?.instructions" :key="i">
            {{ instruction }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
