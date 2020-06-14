import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import movies from '@/store/modules/movies'
export default new Vuex.Store({
  modules: {
    movies
  }
});
