import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../views/Order'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Order',
    component: Order
  },
]

const router = new VueRouter({
  routes
})

export default router
