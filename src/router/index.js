import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/item/:id/:title/:price/:image/:description/:rate',
    name: 'CardView',
    component: () => import('../views/CardView.vue'),
    props: true
  },
  {
    path: '/',
    name: 'CatalogView',
    component: () => import('../views/CatalogView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
