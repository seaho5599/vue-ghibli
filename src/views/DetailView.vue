<template>
  <div>
  <div class="movie-box" :style="{
    backgroundImage: `url(${movieInfo.movie_banner})`,
    backgroundSize:'cover',
    backgroundPosition:'center'
  }">
    <a class="a-back" @click.stop="back">all list</a>
    <div class="movie-detail">
      <img class="movie-imge" :src="movieInfo.image" alt="">
      <div class="movie-info-wrap">
        <h2 class="movie-title">{{movieInfo.title}} <small>{{movieInfo.original_title}}</small></h2>
        <p class="movie-info">
          Release Data {{movieInfo.release_date}} <br>
          Dircetor : {{movieInfo.director}}<br>
          Producer : {{movieInfo.producer}}<br>
          Running Time{{movieInfo.running_time}}분
        </p>
        <p class="movie-desc">Description :
          {{movieInfo.description}}
        </p>

      </div>

    </div>
  </div>
  <Transition name="fade">
  <div class="detail-intro" v-if="show"></div>
  </Transition>
  </div>
</template>

<script>
  import {
    computed,onMounted,onUpdated,ref
  } from 'vue';
  // router 를 통해서 전송받은 데이터 활용
  import {
    useRoute,
    useRouter
  } from 'vue-router'
  import {
    useStore
  } from 'vuex';


  export default {
    setup() {
      const route = useRoute();
      const id = route.params.id
      const store = useStore();
      store.dispatch('fetchMovieInfo', id)
      const movieInfo = computed(() => store.getters.getMoiveInfo)
      const router = useRouter()
      const back = () => {
        router.push('/page-ghibli/')
      }
      const show = ref(true)
      onMounted(() =>{
        window.scrollTo(0, 0)
        document.querySelector('html').style.overflowY = 'hidden'
      })
      onUpdated(() =>{
        show.value = false
        document.querySelector('html').style.overflowY = "auto"
      })
      return {
        id,
        movieInfo,
        back,
        show,
        
      }
    }
  }
</script>

<style scoped>
  .detail-intro{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: url('@/assets/detail-intro.jpg') no-repeat center;
    background-size: cover;
  }
  .movie-box {
    position: relative;
    display: block;
    width: 100%;

  }

  .a-back {
    position: relative;
    display: block;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
    padding: 5px;
    background: skyblue;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
  }

  .movie-detail {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .movie-imge {
    position: relative;
    display: block;
    width: 45%;
    height: auto;
    border-radius: 10px;
    border: 10px solid #fff;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }

  .movie-info-wrap {
    position: relative;
    display: block;
    width: 45%;
  }

  .movie-title {
    position: relative;
    display: block;
    font-size: 20px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    padding: 20px;
    margin-bottom: 20px;
  }

  .movie-title small {
    position: relative;
    display: block;
    float: right;
    color: #333;
    font-size: 12px;
    margin-top: 5px;
  }

  .movie-info {
    position: relative;
    display: block;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    padding: 20px;
    margin-bottom: 20px;

  }

  .movie-desc {
    position: relative;
    display: block;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    padding: 20px;
    margin-bottom: 20px;

  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  @media screen and (max-width:1000px) {
    .movie-imge {
      width: 95%;
      margin: 30px 0;
    }

    .movie-info-wrap {
      width: 95%;
    }
  }
</style>