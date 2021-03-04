import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pendaftaran',
    name: 'Pendaftaran',
    component: () => import('../views/Pendaftaran.vue')
  },
  {
    path: '/sejarah-singkat',
    name: 'Sejarah Singkat',
    component: () => import('../views/SejarahSingkat.vue')
  },
  {
    path: '/visi-misi',
    name: 'Visi Misi',
    component: () => import('../views/VisiMisi.vue')
  },
  {
    path: '/pendidikan-inklusif',
    name: 'Pendidikan Inklusif',
    component: () => import('../views/PendidikanInklusif.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
  },
  {
    path: '/fasilitas',
    name: 'Fasilitas',
    component: () => import('../views/Fasilitas.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/document',
    name: 'Document',
    component: () => import('../views/Document.vue')
  },
  {
    path: '/foto',
    name: 'Foto',
    component: () => import('../views/Foto.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
