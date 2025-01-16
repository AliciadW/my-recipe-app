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
      path: '/favourites',
      name: 'favourite-recipes',
      component: HomeView,
    },
    {
      path: '/recipe/:id',
      name: 'selected-recipe',
      component: () => import('../views/RecipeView.vue'),
    },
  ],
});

export default router;
