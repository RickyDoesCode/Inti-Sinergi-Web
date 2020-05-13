import Vue from 'vue';
import Vuex from 'vuex';

import up from '@/assets/images/icons/up-arrow.svg';
import down from '@/assets/images/icons/down-arrow.svg';

import orders from '@/assets/files/orders.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: {
      filter: false,
    },
    styles: {
      active: 'flex text-blue items-center hoverable',
      inactive: 'flex text-light-gray items-center hoverable',
    },
    sources: {
      arrows: {
        active: up,
        inactive: down,
      },
    },
    filter: {
      nomor: {
        display: 'No. Pemesanan',
        value: '',
      },
      asal: {
        display: 'Asal',
        value: '',
      },
      tujuan: {
        display: 'Tujuan',
        value: '',
      },
      eta: {
        display: 'ETA',
        value: '',
      },
      status: {
        display: 'Status',
        value: '',
      },
      tipe: {
        display: 'Tipe',
        value: '',
      },
      kargo: {
        display: 'Tipe Kargo',
        value: '',
      },
      incoterms: {
        display: 'Incoterms',
        value: '',
      },
      kontainer: {
        display: 'Tipe Kontainer',
        value: '',
      },
    },
    orders,
  },
  getters: {
    getStyle(state) {
      const key = state.active.filter ? 'active' : 'inactive';
      return state.styles[key];
    },
    getArrow(state) {
      const key = state.active.filter ? 'active' : 'inactive';
      return state.sources.arrows[key];
    },
    getTags(state) {
      const filters = {};
      const keys = Object.keys(state.filter);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        if (state.filter[key].value.length) {
          filters[state.filter[key].display] = state.filter[key].value;
        }
      }
      return filters;
    },
    getFiltered(state) {
      const filtered = [];
      for (let i = 0; i < state.orders.length; i += 1) {
        let flag = true;
        const keys = Object.keys(state.filter).filter((key) => state.filter[key].value.length);
        if (!keys.length) {
          return state.orders;
        }
        for (let j = 0; j < keys.length; j += 1) {
          if (state.orders[i][keys[j]] !== state.filter[keys[j]].value) {
            flag = false;
          }
        }
        if (flag) {
          filtered.push(state.orders[i]);
        }
      }
      return filtered;
    },
  },
  mutations: {
    TOGGLE_ACTIVE(state, { field, value }) {
      if (field === 'filter') {
        const boolean = value || !state.active.filter;
        state.active.filter = boolean;
      }
    },
    SET_FILTER_PARAM(state, { name, value }) {
      state.filter[name].value = value;
    },
    RESET_FILTER(state) {
      const keys = Object.keys(state.filter);
      const result = {};
      for (let i = 0; i < keys.length; i += 1) {
        result[keys[i]] = { ...state.filter[keys[i]], value: '' };
      }
      state.filter = result;
    },
  },
  actions: {
    toggle({ commit }, payload) {
      commit('TOGGLE_ACTIVE', payload);
    },
    updateFilterParameter({ commit }, payload) {
      commit('SET_FILTER_PARAM', payload);
    },
    reset({ commit }) {
      commit('RESET_FILTER');
    },
  },
});
