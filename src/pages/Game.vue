<template>
  <div class="container-fluid bg-dark" id="game" v-if="game._id">
    <div class="row">
      <div class="col-12">
        <h1 class="my-3 text-warning">BATTLE</h1>
      </div>
      <div class="col-6 d-flex justify-content-center my-3">
        <div v-if="game.dragonHp > 0">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{game.dragon.name}}</h4>
            <p class="card-text">Hp:{{game.dragonHp}}/{{game.dragon.hp}}</p>
          <img class="card-img-top" :src="game.dragon.imgUrl" alt="">
         <button v-for="a in game.champion.attacks" :key="a._id" class="btn btn-danger m-2" @click="attack(a.name)">{{a.name}}</button>
          </div>
        </div>
        </div>
        <div v-else>
          <h1 class="text-success">YOU WIN</h1>
        </div>
      </div>

      <div class="col-6 d-flex justify-content-center my-3">
        <div v-if="game.championHp > 0">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{game.champion.name}}</h4>
              <p class="card-text">Hp:{{game.championHp}}/{{game.champion.hp}}</p>
              <img class="card-img-top" :src="game.champion.imgUrl" alt="">
            </div>
          </div>
        </div>
        <div v-else>
          <h1 class="text-danger">YOU DIED</h1>
        </div>
      </div>      
    </div>
  </div>
</template>


<script>
export default {
  name: 'game',
  data(){
    return {
    }
  },
  mounted(){
    this.$store.dispatch("getGame", this.$route.params.id)
  },
  computed:{
    activeChampion(){
      return this.$store.state.activeChampion
    },
    activeDragon(){
      return this.$store.state.activeDragon
    },
    game(){
      return this.$store.state.game
    }
  },
  methods:{
    attack(attack){
      let id = this.$route.params.id
      this.$store.dispatch("attack", {attack: attack, id})
    }
  },
  components:{}
}
</script>


<style scoped>
#game{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.card{
  max-width: 27rem;
}

</style>