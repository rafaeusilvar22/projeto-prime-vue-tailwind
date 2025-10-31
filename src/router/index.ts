import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/settings',
      component: () => import('../layouts/SettingsLayout.vue'),
      children: [
        {
          path: 'privacidade',
          name: 'privacidade',
          component: () => import('../views/settings/PrivacyView.vue'),
        },
        {
          path: 'status',
          name: 'status',
          component: () => import('../views/settings/StatusView.vue'),
        },
        {
          path: 'conta',
          name: 'conta',
          component: () => import('../views/settings/AccountView.vue'),
        },
        {
          path: 'ajuda',
          name: 'ajuda',
          component: () => import('../views/settings/HelpView.vue'),
        },
      ],
    },
  ],
})

export default router
