import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/WelcomePage.vue'),
      },
    ],
  },
  {
    path: '/selector',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/TestSelectorPage.vue'),
      },
    ],
  },
  {
    path: '/testing/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TestingPage.vue') }],
  },
  {
    path: '/testing2/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TestingPage2.vue') }],
  },
  {
    path: '/apitest',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ApiTestPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
