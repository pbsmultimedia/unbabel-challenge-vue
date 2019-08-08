import Vue from 'vue'
import Router from 'vue-router'
import Transcriptions from '../Transcriptions.vue'
import NotFound from '../NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Transcriptions',
      component: Transcriptions
    },
    {
      path: '*',
      name: NotFound,
      component: NotFound
    },
  ]
})
