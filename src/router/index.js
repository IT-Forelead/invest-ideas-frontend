import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/add-idea',
    name: 'Add idea',
    component: () => import('../views/AddIdea.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/ideas',
    name: 'Ideas',
    component: () => import('../views/Ideas.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/idea',
    name: 'Idea',
    component: () => import('../views/Idea.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/about',
    name: 'About us',
    component: () => import('../views/About.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/contact-us',
    name: 'Contact us',
    component: () => import('../views/ContactUs.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/login',
    name: 'Sign in',
    component: () => import('../views/Login.vue'),
    meta: { layout: 'login' },
  },
  {
    path: '/sign-up',
    name: 'Sign up',
    component: () => import('../views/SignUp.vue'),
    meta: { layout: 'login' },
  },
  {
    path: '/notfound',
    name: 'Not-Found',
    component: () => import('../components/NotFound.vue'),
  },
  {
    path: '/:pathMach(.*)*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/add-idea', '/ideas', '/idea', '/about', '/contact-us', '/login', '/sign-up']
  const authNotRequired = !publicPages.includes(to.path)
  const notLoggedIn = localStorage.getItem('token')
  if ((authNotRequired && notLoggedIn) || publicPages.includes(`/${to.path.split('/')[1]}`)) {
    next()
  } else {
    next('/')
  }
})

export default router
