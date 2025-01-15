import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/saved',
      name: 'saved-recipes',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/recipe/:id',
      name: 'selected-recipe',
      component: () => import('../views/RecipeView.vue'),
    },
  ],
});

export default router;
