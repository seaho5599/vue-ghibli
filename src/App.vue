<template>
<div class="wrap">
  <div class="container">
  <RouterView />
  </div>
</div>
</template>

<script>

import{useStore} from 'vuex'


export default {

  name: 'App',
  components: {
    
  },
  setup(){
    // vuex 에 dispatch 전송
    const store = useStore();
    store.dispatch('fetchMovieList')
    
    return{
      
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  img{
    vertical-align: middle;
    border: 0;
  }
  html{
    font-size: 16px;
    }
  body{
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #eff3f7;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }
  .wrap{
    position: relative;
    display: block;
  }
  .container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
