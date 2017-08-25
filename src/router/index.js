import Vue from 'vue'
import Router from 'vue-router'
import app from '../App.vue'
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
import fusekiList from '../components/main/fusekiList.vue'
import homePage from '../components/main/homePage.vue'
import data from '../components/main/data.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: "首页",
      component: homePage,
    },
    {
      path: '/data',
      name: "数据大屏",
      component: data,
    },
    {
      path: '/body',
      component: index,
      redirect: '/body/look',
      children: [{
          path: 'look',
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
          path: 'fusekiList',
          name: 'fusekiList',
          component: fusekiList,
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
        },

      ]
    },
  ]
})
