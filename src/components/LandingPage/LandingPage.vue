<script setup lang="ts"></script>

<template>
  <div class="flex flex-col text-center">
    <h1 class="text-6xl pb-5 pt-10 max-w-lg">Find your favourite</h1>
    <h3 class="text-2xl max-w-lg">
      Search through the selection of recipes to find your favourite and build your own recipe
      collection.
    </h3>

    <div class="flex flex-col mt-10 mb-4">
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
    <div class="bg-red-200 w-100 max-w-5xl">Results</div>
  </div>
</template>
