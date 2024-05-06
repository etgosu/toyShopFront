import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mypage from '../views/Mypage.vue'
import ShopBasket from '../views/ShopBasket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage 
  },
  {
    path: '/shopBasket',
    name: 'shopBasket',
    component:ShopBasket 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
