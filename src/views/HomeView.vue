<template>
  <div class="logo">
    <img class="logo-img" :src="'./images/logo.svg'" alt="" />
  </div>
  <Swiper
    :modules="modules"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :mousewheel="true"
  >
    <swiper-slide class="movie" v-for="(item, index) in movieList" :key="index">
      <!-- <div class="movie" v-for="(item, index) in movieList" :key="index"> -->
      <MovieList :propsdata="item" />
      <!-- </div> -->
    </swiper-slide>
  </Swiper>

  <button class="gotop" ref="gotop" @click="moveTop">
    <span class="gotop-btn"> </span>
  </button>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from "vue";
import { useStore } from "vuex";
import { Mousewheel, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import MovieList from "../components/MovieList.vue";

export default {
  components: {
    MovieList,
    Swiper,
    SwiperSlide,
  },
  setup(props, context) {
    const store = useStore();
    // 처음에는 computed가 결과가 없는 상태
    const movieList = computed(() => store.getters.getMoiveList);
    // html 태그의 속성으로 ref를 활용해여 선택
    const gotop = ref(null);
    onMounted(() => {});

    // axios 실해 > vuex : mutaion 실행
    onUpdated(() => {
      // 내용물이 최종 업데이트가 되었다면 App 으로
      // intro 사라지라고 신호를 보낸다.
      let delay = setTimeout(() => {
        clearTimeout(delay);
        context.emit("hide");
      }, 1500);
    });
    const moveTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    return {
      movieList,
      gotop,
      moveTop,
      modules: [Mousewheel, EffectCoverflow],
    };
  },
};
</script>

<style scoped>
.logo {
  position: relative;
  display: block;
  width: 100%;
  margin: 50px 0;
}

.logo-img {
  position: relative;
  display: block;
  margin: 0 auto;
}

.movie {
  position: relative;
  display: block;
  width: 30%;
  height: 90%;
  background: #bbb;
  margin-bottom: 70px;
  margin-top: 35px;
  border-radius: 5px;
  color: #adaeb9;
  padding: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  cursor: pointer;
}

.gotop {
  position: fixed;
  right: 50px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: #ccc;
  color: #fff;
  cursor: pointer;
  z-index: 9;
  border: 0;
  border-radius: 10px;
}

.gotop-btn {
  display: block;
  width: 25px;
  height: 40px;
  margin: 0 auto;
  background: url("@/assets/gotop.png") no-repeat center;
  background-size: cover;
  /* font-size: 48px; */
}

@media screen and (max-width: 1000px) {
  .logo-img {
    width: 80%;
  }

  .movie {
    width: 95%;
  }
}
</style>
