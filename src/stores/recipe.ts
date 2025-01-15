import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export const useRecipeStore = defineStore('recipe', () => {
  // refs - state
  const recipes = ref<Recipe[]>([]);

  // computed - getters

  // functions - actions
  const getRecipes = async (): Promise<void> => {
    const response = await fetch('https://dummyjson.com/recipes');

    if (response) {
      const recipeResponse = await response.json();

      recipes.value = recipeResponse.recipes;
    } else {
      // handle no response
    }
  };

  return {
    recipes,
    getRecipes,
  };
});
