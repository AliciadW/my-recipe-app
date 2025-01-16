import type { Recipe } from '@/types/RecipeTypes.ts';

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRecipeStore = defineStore(
  'recipe',
  () => {
    // refs - state
    const recipes = ref<Recipe[]>([]);
    const favouriteRecipes = ref<Recipe[]>([]);
    const recipe = ref<Recipe>({
      id: '',
      name: '',
      ingredients: [],
      instructions: [],
      prepTimeMinutes: 0,
      cookTimeMinutes: 0,
      servings: 0,
      difficulty: '',
      cuisine: '',
      caloriesPerServing: 0,
      tags: [],
      userId: 0,
      image: '',
      rating: 0,
      reviewCount: 0,
      mealType: [],
      favourite: false,
    });

    // computed - getters

    // functions - actions
    const getRecipes = async (): Promise<void> => {
      const response = await fetch('https://dummyjson.com/recipes');

      if (response) {
        const recipesResponse = await response.json();

        recipes.value = recipesResponse.recipes;
      } else {
        // handle no response
      }
    };

    const getSingleRecipe = async (id: string): Promise<void> => {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);

      if (response) {
        recipe.value = await response.json();
      } else {
        // handle no response
      }
    };

    const toggleRecipeAsFavourite = async (id: string): Promise<void> => {
      recipe.value.hasOwnProperty('favourite')
        ? (recipe.value['favourite'] = !recipe.value['favourite'])
        : (recipe.value['favourite'] = true);

      if (recipe.value.favourite) {
        favouriteRecipes.value.push(recipe.value);
      } else {
        favouriteRecipes.value = favouriteRecipes.value.filter((faveRecipe) => {
          return faveRecipe.id != id;
        });
      }
    };

    return {
      recipe,
      recipes,
      favouriteRecipes,
      getRecipes,
      getSingleRecipe,
      toggleRecipeAsFavourite,
    };
  },
  { persist: true },
);
