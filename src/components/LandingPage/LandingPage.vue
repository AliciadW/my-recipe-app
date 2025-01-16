<script setup lang="ts">
import type { Recipe } from '@/types/RecipeTypes.ts';

import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useRecipeStore } from '@/stores/recipe.ts';
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue';

const route = useRoute();
const recipeStore = useRecipeStore();
const { recipes, favouriteRecipes, searchResults } = storeToRefs(recipeStore);

if (recipes.value.length === 0) {
  // only make API call if we don't have any recipes yet
  recipeStore.getRecipes();
}

const homeRecipes = ref<Recipe[]>(recipes.value);

const recipesToShow = computed<Recipe[]>(() => {
  return route.name === 'home' ? homeRecipes.value : favouriteRecipes.value;
});

watch(
  searchResults.value,
  () => {
    searchResults.value.length > 0
      ? (homeRecipes.value = searchResults.value)
      : (homeRecipes.value = recipes.value);
  },
  { immediate: true },
);
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

    <SearchInput />

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
