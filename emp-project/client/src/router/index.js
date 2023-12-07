import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainComponent.vue'
import EmpList from '../views/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'
import EmpForm from '../views/EmpForm.vue'
import EmpFormView from '../views/EmpFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/empList',
    name: 'empList',
    component: EmpList
  },
  {
    path: '/empInfo',
    name: 'empInfo',
    component: EmpInfo
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: EmpForm
  },
  {
    path:'/empFormView',
    name:'empFormView',
    component:EmpFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
