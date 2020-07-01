import Vue from 'vue';
//import './plugins/vue-multiselect';
import './plugins/axios-config';
import vuetify from './plugins/vuetify';
import './plugins/vue-timers';
//import './plugins/vee-validate';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$getVeeValidationState = function({ dirty, validated, valid = null }) {
  return dirty || validated ? valid : null;
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
