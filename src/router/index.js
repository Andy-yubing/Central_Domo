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
import yuq from '../components/main/yuq.vue'
import fko from '../components/main/fko.vue'
import huj from '../components/main/huj.vue'
import reportList from '../components/main/reportList.vue'
import groupList from '../components/main/grop_list.vue'
import countryList from '../components/main/countryList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '',
      redirect:'/home'
    },{
      path: '/home',
      name: "首页",
      component: homePage,
    },
    {
      path: '/data',
      name: "数据大屏",
      component: data,
    },
    {
      path: '/yuq',
      name: "舆情",
      component: yuq,
    },
    {
      path: '/fko',
      name: "风控",
      component: fko,
    },
    {
      path: '/huj',
      name: "环境",
      component: huj,
    },
    {
      path: '/body',
      component: index,
      redirect:'/body/look',
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
          path: 'fusekiList/:id',
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
          path: 'countryList/:id',
          name: 'countryList',
          component: countryList,
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
        {
          path: 'reportList',
          name: 'reportList',
          component: reportList,
        },
        {
          path: 'groupList',
          name: 'groupList',
          component: groupList,
        }
      ]
    },
  ]
})
