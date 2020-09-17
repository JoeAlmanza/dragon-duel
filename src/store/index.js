import Vue from 'vue'
import Vuex from 'vuex'
import {api} from "../services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    activeChampion: null,
    dragons: [],
    activeDragon: null
  },

  mutations: {
    setResources(state, resource){
      state[resource.resource] = resource.data
    }
  },

  actions: {
    async getAll({commit}, resource){
      try{
        let res = await api.get(resource)
        commit("setResources", {data: res.data, resource})
      } catch (error) {
      console.error(error);
      }
    },
    async getChampionById({commit}, id){
      try {
        let res = await api.get("champions/" + id)
        commit("setResources", {data: res.data, resource: "activeChampion"})
      } catch (error) {
        console.error(error);
      }
    },
    async getDragonById({commit}, id){
      try {
        let res = await api.get("dragons/" + id)
        commit("setResources", {data: res.data, resource: "activeDragon"})
      } catch (error) {
        console.error(error);
      }
    }
  },

  modules: {
  }
})
