import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from '../components/MainScreen';
import EditGoals from '../components/EditGoals';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:MainScreen
  },
  {
    path: '/edit',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditGoals
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
