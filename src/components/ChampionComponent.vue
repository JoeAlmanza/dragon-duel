<template>
  <div class="card col-3 p-2 m-1 bg-primary text-warning" @click="setActive">
    <img class="card-img-top" :src="championData.imgUrl" alt="">
    <div class="card-body">
      <h4 class="card-title">{{championData.name}}</h4>
      <p class="card-text">Race: {{championData.race}}</p>
      <p class="card-text">Class: {{championData.class}}</p>
      <p class="card-text">HP: {{championData.hp}}</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Champion',
  props: {
    championData: {
      type: Object,
      required: true
    }
  },

  methods: {
    setActive(){
      this.$store.dispatch("getChampionById", this.championData._id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card:active{
  transform: translateY(2px);
  }
.card{
  min-width: 11rem;
}

</style>
