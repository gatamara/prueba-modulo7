const state = {
  counter: 0, // valor inicial del counter
};

const mutations = {
  SET_COUNTER(state, newValue) {
    state.counter = newValue;
  },
  INCREMENT_COUNTER(state) {
    state.counter++;
  },
  DECREMENT_COUNTER(state) {
    state.counter--;
  },
};

const actions = {
  incrementCounter({ commit }) {
    commit('INCREMENT_COUNTER');
  },
  decrementCounter({ commit }) {
    commit('DECREMENT_COUNTER');
  },
  setCounter({ commit }, value) {
    commit('SET_COUNTER', value);
  },
};



export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
