import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import routes from './utils/routes.js'
import modules from './utils/modules.js'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// vuex配置
Vue.use(Vuex);
const store = new Vuex.Store({
  modules,
})
// 路由配置
Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({routes});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
