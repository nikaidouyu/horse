import Vue from 'vue'
import VueRouter from 'vue-router'
import Loguin from '../views/Loguin.vue'
import Signup from '../views/Signup.vue'
import Completion from '../views/Completion.vue'
import Top from '../views/Top.vue'
import Course from '../views/Course.vue'
import System from '../views/System.vue'
import Pedigree from '../views/Pedigree.vue'
import Textbook from '../views/Textbook.vue'
import Tokyo from '../views/Tokyo.vue'
import Hanshin from '../views/Hanshin.vue'
import Kyoto from '../views/Kyoto.vue'
import Nakayama from '../views/Nakayama.vue'
import Chukyo from '../views/Chukyo.vue'
import Nigata from '../views/Nigata.vue'
import Fukushima from '../views/Fukushima.vue'
import Sapporo from '../views/Sapporo.vue'
import Hakodate from '../views/Hakodate.vue'
import Kokura from '../views/Kokura.vue'
import Predict from '../views/Predict.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loguin',
    component:Loguin
  },
  {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },
  {
    path: '/completion',
    name: 'Completion',
    component:Completion
  },
  {
    path: '/top',
    name: 'Top',
    component:Top
  },
  {
    path: '/course',
    name: 'Course',
    component:Course
  },
  {
    path: '/system',
    name: 'System',
    component:System
  },
  {
    path: '/pedigree',
    name: 'Pedigree',
    component:Pedigree
  },
  {
    path: '/textbook',
    name: 'Textbook',
    component:Textbook
  },
  {
    path: '/tokyo',
    name: 'Tokyo',
    component:Tokyo
  },
  {
    path: '/hanshin',
    name: 'Hanshin',
    component:Hanshin
  },
  {
    path: '/kyoto',
    name: 'Kyoto',
    component:Kyoto
  },
  {
    path: '/nakayama',
    name: 'Nakayama',
    component:Nakayama
  },
  {
    path: '/chukyo',
    name: 'Chukyo',
    component:Chukyo
  },
  {
    path: '/nigata',
    name: 'Nigata',
    component:Nigata
  },
  {
    path: '/fukushima',
    name: 'Fukushima',
    component:Fukushima
  },
  {
    path: '/sapporo',
    name: 'Sapporo',
    component:Sapporo
  },
  {
    path: '/hakodate',
    name: 'Hakodate',
    component:Hakodate
  },
  {
    path: '/kokura',
    name: 'Kokura',
    component:Kokura
  },
  {
    path: '/predict',
    name: 'Predict',
    component:Predict
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
