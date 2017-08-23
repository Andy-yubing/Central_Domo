import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import fullView from '../components/main/fullView.vue'
import look from '../components/main/lookInto.vue'
import layout from '../components/main/layout.vue'
import policy from '../components/main/policy.vue'
import diagnose from '../components/main/diagnose.vue'
import report from '../components/main/report.vue'
import fuseki from '../components/main/fuseki.vue'
import Search from '../components/main/Search.vue'
import obor from '../components/main/obor.vue'
import environment from '../components/main/environment.vue'
import message from '../components/main/message.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
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
      children:[
        {
          path: '/',
          name: 'fullView',
          component: fullView,
        },
        {
          path: 'layout',
          name: 'layout',
          component: layout,
        },
        {
          path: 'policy',
          name: 'policy',
          component: policy,
        },
        {
          path: 'diagnose',
          name: 'diagnose',
          component: diagnose,
        },
        {
          path: 'report',
          name: 'report',
          component: report,
        },
        {
          path: 'fuseki',
          name: 'fuseki',
          component: fuseki,
        },
        {
          path: 'Search',
          name: 'Search',
          component: Search,
        },
        {
          path: 'obor',
          name: 'obor',
          component: obor,
        },
        {
          path: 'environment',
          name: 'environment',
          component: environment,
        },
        {
          path: 'message',
          name: 'message',
          component: message,
        }
      ]
    },

  ]
})
