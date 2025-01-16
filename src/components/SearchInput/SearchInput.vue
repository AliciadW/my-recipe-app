<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { useRecipeStore } from '@/stores/recipe.ts';

const recipeStore = useRecipeStore();
const { recipes, searchResults } = storeToRefs(recipeStore);

const searchTerm = ref<string>('');

watch(searchTerm, () => {
  // initiate search only once 3 characters are entered
  if (searchTerm.value.length > 2) {
    // search through recipes to find matching names
    // search through recipes to find matching ingredients
    recipes.value.find((recipe) => {
      const searchWord = searchTerm.value.toLowerCase();
      const name = recipe.name.toLocaleLowerCase();
      const ingredients = recipe.ingredients.toString().toLocaleLowerCase();

      if (name.includes(searchWord) || ingredients.includes(searchWord)) {
        searchResults.value.push(recipe);

        searchResults.value = searchResults.value.filter((value, index, arr) => {
          return arr.findIndex((result) => result.id === value.id) === index;
        });
      } else {
        return;
      }
    });
  } else if (searchTerm.value === '') {
    searchResults.value = [];
  }
});
</script>

<template>
  <div class="flex flex-col mt-10 mb-4 w-full max-w-lg">
    <div class="max-w-lg">
      <div
        class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
      >
        <input
          v-model="searchTerm"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          class="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
      </div>
    </div>
  </div>
</template>
