<template>
<div class="logo">
  <img class="logo-img" :src="('./images/logo.svg')" alt="">
</div>
<div class="movie" v-for="(item, index) in movieList" :key="index">
<MovieList :propsdata ="item"/>
</div>
</template>

<script>
import { computed } from 'vue';
import {useStore} from 'vuex';
import MovieList from '../components/MovieList.vue';

export default {
  components:{
    MovieList
    },
  setup(){
    const store = useStore();
    const movieList = computed(() => store.getters.getMoiveList)
    return{
      movieList
    }
  }
}
</script>

<style scoped>
.logo{
  position: relative;
  display: block;
  width: 100%;
  margin: 50px 0;
  
}
.logo-img{
  position: relative;
  display: block;
  margin: 0 auto;
}
.movie{
  position: relative;
  display: block;
  width: 49%;
  background: #fff;
  margin-bottom: 70px;
  border-radius: 5px;
  color: #adaeb9;
  padding: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  cursor: pointer;
}
@media screen and (max-width: 1000px) {
  .movie{
    width: 95%;
  }
}
</style>