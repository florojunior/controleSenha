import Vue from 'vue';
import Vuex from 'vuex';

import {principal} from './modules/principal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    principal
  },
});
