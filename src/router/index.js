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
    path: '/cart',
    name: 'Cart',
    component: function () {
      return import('../views/Cart.vue')
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: function () {
      return import('../views/Admin.vue')
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: function () {
      return import('../views/Form.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
