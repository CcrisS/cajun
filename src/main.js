import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { actions } from './store/actions';
import { mutations } from './store/mutations';
import { state } from './store/state';
import { getters } from './store/getters';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI, { size: 'small' });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store: new Vuex.Store({ actions, mutations, state, getters })
})