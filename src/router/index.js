import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import signup from '@/components/signup'
import login from '@/components/login'
import map from '@/components/map'
import profile from '@/components/profile'
import refresh from '@/components/refresh'
import regiscarros from '@/components/regiscarros'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/map',
      name: 'map',
      component: map,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/refresh',
      name: 'refresh',
      component: refresh,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/regiscarros',
      name:'regiscarros',
      component: regiscarros,
      meta:{
        requieresVisitor: true
      }

    }
    
  ]
})
