<script setup lang="ts">
import type { NavigationItem } from '@/types/ComponentTypes.ts';

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon, HeartIcon, ListBulletIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const router = useRouter();
const navigation: NavigationItem[] = [
  { name: 'All recipes', routeName: 'home', icon: ListBulletIcon },
  { name: 'Favourites', routeName: 'favourite-recipes', icon: HeartIcon },
];

const mobileMenuOpen = ref<boolean>(false);
</script>

<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-4"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Alicia's Recipes</span>
          <img class="h-20 w-auto" src="@/assets/logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <p
          v-for="item in navigation"
          :key="item.name"
          :class="{ 'text-indigo-600': route.name === item.routeName }"
          class="text-sm/6 font-semibold text-gray-900 cursor-pointer"
          @click="router.push({ name: item.routeName })"
        >
          {{ item.name }}
        </p>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Alicia's Recipes</span>
            <img class="h-16 w-auto" src="@/assets/logo.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <p
                v-for="item in navigation"
                :key="item.name"
                class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                @click="router.push({ name: item.routeName })"
              >
                <div
                  class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <component
                    :is="item.icon"
                    class="size-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
