import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('../pages/section/Home.vue'),
  },
  {
    path: '/about',
    name: 'conoceme',
    component: () => import('../pages/section/About.vue'),
  },
  {
    path: '/skill',
    name: 'experiencia',
    component: () => import('../pages/section/Skill.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
