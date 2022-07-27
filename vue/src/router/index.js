import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import RendezvousView from '../views/RendezvousView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rendez-vous',
      name: 'RendezVousView',
      component: RendezvousView
    },
    {
      path: '/calendrier',
      name: 'CalendarView',
      component: CalendarView
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
