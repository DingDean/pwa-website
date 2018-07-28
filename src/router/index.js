import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      props: route => {
        return {
          ...route.query
        }
      }
    },
    {
      path: '/mineself',
      component: () => import('../views/mineself.vue')
    },
    {path: '*', component: Main}
  ]
})
