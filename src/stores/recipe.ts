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
  favourite: boolean;
}

export const useRecipeStore = defineStore(
  'recipe',
  () => {
    // refs - state
    const recipes = ref<Recipe[]>([]);
    const recipe = ref<Recipe | null>(null);

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

    return {
      recipe,
      recipes,
      getRecipes,
      getSingleRecipe,
    };
  },
  { persist: true },
);
