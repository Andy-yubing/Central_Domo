import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import header from '../components/main/header.vue'
import footer from '../components/main/footer.vue'
import look from '../components/main/lookInto.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/look',
      name: 'look',
      component: look,
    },

  ]
})
