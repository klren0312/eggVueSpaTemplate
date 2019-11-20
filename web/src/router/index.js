import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

const Layout = resolve => require(['@/views/layout/index.vue'], resolve)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      name: 'HomePage',
      path: '',
      component: () => import('../views/userPage/index.vue')
    }]
  },
  {
    path: '/userPage',
    component: Layout,
    children: [{
      name: 'UserPage',
      path: '',
      component: () => import('../views/userPage/index.vue')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/loginPage/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (to.path === '/login') {
    if (!store.state.user) {
      next()
      NProgress.done()
    } else {
      next({ path: '/' })
      NProgress.done()
    }
  } else {
    if (store.state.user) {
      next()
      NProgress.done()
    } else {
      next({ path: `/login` })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
