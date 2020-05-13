import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import App from './App.vue';
import store from './store';
import './assets/styles/css/index.css';

Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
