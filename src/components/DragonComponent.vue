<template>
  <div class="card col-3" @click="setActive">
    <img class="card-img-top" :src="dragonData.imgUrl" alt="">
    <div class="card-body">
      <h4 class="card-title">{{dragonData.name}}</h4>
      <p class="card-text">HP: {{dragonData.hp}}</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Dragon',
  props: {
    dragonData: {
      type: Object,
      required: true
    }
  },
  methods: {
    setActive(){
      this.$store.dispatch("getDragonById", this.dragonData._id)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
