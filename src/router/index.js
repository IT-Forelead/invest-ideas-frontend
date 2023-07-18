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
    path: '/idea/:id',
    name: 'Idea',
    component: () => import('../views/Idea.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/startups',
    name: 'Startups',
    component: () => import('../views/Startups.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/startup/:id',
    name: 'Startup',
    component: () => import('../views/Startup.vue'),
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
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/:pathMach(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 };
  }
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/add-idea', '/ideas', '/idea', '/projects', '/project', '/startups', '/startup', '/about', '/contact-us', '/login', '/sign-up']
  const authNotRequired = !publicPages.includes(to.path)
  const notLoggedIn = localStorage.getItem('token')
  if ((authNotRequired && notLoggedIn) || publicPages.includes(`/${to.path.split('/')[1]}`)) {
    next()
  } else {
    next('/')
  }
})

export default router
