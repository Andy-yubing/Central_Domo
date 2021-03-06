import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router';
import "./sass/public.scss";
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
