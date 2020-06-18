import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.APP_API_KEY = "c761829ac0b8104630fcc3299a416d3c";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
