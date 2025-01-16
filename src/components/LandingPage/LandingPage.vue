<script setup lang="ts">
import type { Recipe } from '@/types/RecipeTypes.ts';

import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useRecipeStore } from '@/stores/recipe.ts';
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';

const route = useRoute();
const recipeStore = useRecipeStore();
const { recipes, favouriteRecipes } = storeToRefs(recipeStore);

recipeStore.getRecipes();

const recipesToShow = computed<Recipe[]>(() => {
  return route.name === 'home' ? recipes.value : favouriteRecipes.value;
});
</script>

<template>
  <div class="flex flex-col text-center items-center justify-center w-full">
    <h1 class="text-6xl pb-5 pt-10 max-w-lg">Find your favourite</h1>
    <h3 class="text-2xl max-w-lg">
      {{
        route.name === 'favourite-recipes'
          ? 'Search your favourite recipes.'
          : 'Search through the selection of recipes to find your favourite and build your own recipe collection.'
      }}
    </h3>

    <div class="flex flex-col mt-10 mb-4 w-full max-w-lg">
      <!-- TODO: break out into own component -->
      <div class="max-w-lg">
        <div
          class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            class="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
          />
        </div>
      </div>
    </div>
    <!-- TODO: break out into own component -->
    <div class="flex flex-col">
      <div v-if="recipesToShow.length > 0" class="w-100 max-w-5xl">
        <div class="grid grid-cols-1 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RecipeCard v-for="recipe in recipesToShow" :key="recipe.id" :recipe />
        </div>
      </div>
      <div v-else-if="route.name === 'favourite-recipes'">
        You have not favourited any recipes yet.
      </div>
    </div>
  </div>
</template>
