import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../pages/section/Home.vue'),
  },
  {
    path: '/about',
    name: 'Conoceme',
    component: () => import('../pages/section/About.vue'),
  },
  // {
  //   path: '/skill',
  //   name: 'Tecnolígas',
  //   component: () => import('../pages/section/Skill.vue'),
  // },
  {
    path: '/experience',
    name: 'Resumen',
    component: () => import('../pages/section/Experience.vue'),
  },
  {
    path: '/portafolio',
    name: 'Portafolio',
    component: () => import('../pages/section/Portafolio.vue'),

  },
  {
    path: '/portafolio/:id',
    name: 'Detalle de portafolio',
    component: () => import('../pages/section/PortafolioDetails.vue'),
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: () => import('../pages/section/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default router
