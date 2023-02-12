import { createRouter, createWebHistory } from 'vue-router'
import PersonalForm from '../views/PersonalForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PersonalForm,
    },
  ]
})

export default router
