import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router"
import {api} from "../services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    activeChampion: null,
    dragons: [],
    activeDragon: null,
    game: {}
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
    },
    async attack({commit}, attack){
      try {
        console.log(attack.attack)
        let res = await api.put(('games/'+ attack.id), attack)
        commit("setResources", {data: res.data, resource: 'game'})
        
      } catch (error) {
        console.error(error)
      }
    },
    async startGame({commit}, players){
      try {
       let res = await api.post("games", players)
        router.push({name: 'Game', params:{id:res.data._id}})
      } catch (error) {
        
      }
    },
    async getGame({commit}, id){
      try {
        let res = await api.get('games/'+id)
        commit('setResources', {data: res.data, resource: "game"})
      } catch (error) {
        console.error(error);
      }
    }
  },


  modules: {
  }
})
