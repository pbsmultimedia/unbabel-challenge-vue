// https://vuex.vuejs.org/guide/structure.html
import Vue from 'vue';
import Vuex from 'vuex';
import transcriptions from './modules/transcriptions';
import header from './modules/header';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transcriptions,
    header
  }
})
