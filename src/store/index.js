import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const menuModule = {
  state: {
    isNavOpen: true,
  },
  getters: {
    isNavOpen(state) {
      return state.isNavOpen;
    },
  },
  mutations: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen;
    },
  },
  actions: {},
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menuModule: menuModule,
  },
});
