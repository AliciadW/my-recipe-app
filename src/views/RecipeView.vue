<script setup lang="ts">
import type { PillButtonType } from '@/types/ComponentTypes.ts';

import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe.ts';

import PillButton from '@/components/basic/PillButton/PillButton.vue';
import FavouriteButton from '@/components/FavouriteButton/FavouriteButton.vue';

const route = useRoute();
const recipeStore = useRecipeStore();

const { recipe, noResponse } = storeToRefs(recipeStore);

if (recipe.value && recipe.value.id != route.params.id) {
  recipeStore.getSingleRecipe(route.params.id as string);
}

const pillButtons: PillButtonType[] = [
  {
    content: recipe?.value.cuisine,
    type: 'cuisine',
  },
  {
    content: `Serves ${recipe?.value.servings}`,
    type: 'servings',
  },
  {
    content: recipe?.value.difficulty,
    type: 'difficulty',
  },
  {
    content: `${recipe?.value.caloriesPerServing} calories`,
    type: 'calories',
  },
];
</script>

<template>
  <main class="flex h-100">
    <div class="flex flex-col">
      <template v-if="noResponse">
        <h2 class="text-2xl mb-3">Something's gone wrong, please refresh the page</h2>
      </template>

      <template v-else>
        <h2 class="text-2xl mb-3">{{ recipe?.name }}</h2>

        <div class="relative w-fit cursor-pointer">
          <img class="w-32 md:w-72 rounded-sm mb-3" :src="recipe?.image" alt="" />
          <FavouriteButton :id="recipe?.id" :favourite="recipe?.favourite" />
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
      </template>
    </div>
  </main>
</template>
