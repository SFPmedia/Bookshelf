import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    LOGOUT_USER(state) {
      state.currentUser = {};  
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    }
  },
  actions: {
    logoutUser({commit}) {
      commit('LOGOUT_USER')
    },
    loginUser({commit}, loginInfo) {
      try {
        let response = loginInfo;
        let user = response.user;
        commit('SET_CURRENT_USER', user)
        return user;
      }
      catch {
        return {error: "Username/password combination was incorrect. Please try again"}
      }
      
    },
    async loadUsers({commit}) {
      let user = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user)
    }
  },
  modules: {}
});
