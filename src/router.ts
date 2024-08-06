import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ImpressumView from './views/ImpressumView.vue'
import PrivacyPolicyView from './views/PrivacyPolicyView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/impressum', name: 'impressum', component: ImpressumView },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicyView }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
