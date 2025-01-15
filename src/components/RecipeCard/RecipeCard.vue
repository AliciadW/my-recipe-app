<script setup lang="ts">
const props = defineProps(['recipe']);
</script>

<template>
  <div class="flex flex-col rounded-md m-2 border-solid border border-slate-200">
    <img class="rounded-t-md" :src="recipe.image" alt="" />
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

<style scoped></style>
