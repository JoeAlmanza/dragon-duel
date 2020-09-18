<template>
  <div class="home container-fluid" id="home">
    <h1 class="my-5 text-info">Dragons <img alt="Vue logo" src="../assets/logo.png" height="30rem">s Champions</h1>
    <button class="btn btn-danger" @click="startGame" v-if="activeChampion && activeDragon">FIGHT</button>
      <div class="row">
        <div class="col-6"> 
          <div class="row justify-content-around">  
            <div class="col-12">
            <h2 class="my-3 text-warning"><u>Dragons</u></h2>
            </div>
            <dragon-component v-for="dragon in dragons" :key="dragon._id" :dragonData="dragon"/>
          </div>
        </div>
        <div class="col-6">
          <div class="row justify-content-around">
            <div class="col-12">
            <h2 class="my-3 text-warning"><u>Champions</u></h2>
            </div>
           <champion-component v-for="champion in champions" :key="champion._id" :championData="champion" />
          </div>
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
<style scoped>
#home{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>