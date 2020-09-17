<template>
  <div class="home container-fluid" id="home">
    <h1 class="my-5">Dragons <img alt="Vue logo" src="../assets/logo.png" height="30rem">s Champions</h1>
    <button @click="startGame" v-if="activeChampion && activeDragon">Start</button>
      <div class="col-6"> 
        <div class="row">
          <dragon-component v-for="dragon in dragons" :key="dragon._id" :dragonData="dragon"/>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <champion-component v-for="champion in champions" :key="champion._id" :championData="champion" />
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import DragonComponent from '@/components/DragonComponent.vue'
import ChampionComponent from '@/components/ChampionComponent.vue'

export default {
  name: 'Home',
  mounted(){
      this.$store.dispatch('getAll', 'champions'),
      this.$store.dispatch('getAll', 'dragons')
    },
  
  components: {
    ChampionComponent,
    DragonComponent
  },
  computed: {
  champions() {
    return this.$store.state.champions;
  },
  dragons() {
    return this.$store.state.dragons;
  },
  activeChampion() {
    return this.$store.state.activeChampion
  },
  activeDragon() {
    return this.$store.state.activeDragon
  }
  },
  methods: {
    startGame(){
      this.$store.dispatch("startGame", {dragon: this.activeDragon._id, champion: this.activeChampion._id})
    }
  }

}
</script>
