<script setup lang="ts">
import { useRouter } from 'vue-router';
import FavouriteButton from '@/components/FavouriteButton/FavouriteButton.vue';

const props = defineProps(['recipe']);

const router = useRouter();

const goToRecipe = async (): Promise<void> => {
  await router.push({ name: 'selected-recipe', params: { id: props.recipe.id } });
};
</script>

<template>
  <div
    class="flex flex-col rounded-md m-2 border-solid border border-slate-200 cursor-pointer relative"
    @click="goToRecipe"
  >
    <img class="rounded-t-md" :src="recipe.image" alt="" />
    <FavouriteButton :id="recipe.id" :favourite="recipe.favourite" :inactive="true" />

    <div class="flex flex-col py-2 px-1">
      <h3 class="text-sm text-left font-bold">{{ recipe.name }}</h3>
      <div class="flex flex-wrap">
        <div class="rounded-full text-xs bg-indigo-200 py-1 px-1.5 mr-1 mt-1">
          <p>{{ recipe.difficulty }}</p>
        </div>
        <div class="rounded-full text-xs bg-indigo-200 py-1 px-1.5 mr-1 mt-1">
          <p>Ready in {{ recipe.cookTimeMinutes + recipe.prepTimeMinutes }} minutes</p>
        </div>
        <div class="rounded-full text-xs bg-indigo-200 py-1 px-1.5 mr-1 mt-1">
          <p>Serves: {{ recipe.servings }}</p>
        </div>
        <div class="rounded-full text-xs bg-indigo-200 py-1 px-1.5 mr-1 mt-1">
          <p>{{ recipe.cuisine }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
