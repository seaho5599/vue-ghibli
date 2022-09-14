<template>
  <div class="movie-box">
    <a @click.stop="detailMove">
      <div class="a-img">
      <img :src="propsdata.image" alt="">
      </div>
      <h2 class="a-title">{{propsdata.title}} <small>{{propsdata.original_title}}</small></h2>
      <p class="a-desc">{{propsdata.description}}</p>
    </a>
  </div>
</template>

<script>
    // router 를 이용한 페이지 이동
  import {useRouter} from 'vue-router'

  export default {
    props: ['propsdata'],
    setup(props) {
      const router = useRouter()
      const detailMove = () => {
        router.push('/page-ghibli/detail/' + props.propsdata.id);
      }
      return {
        detailMove
      }
    }
  }
</script>

<style>
  .movie-box{
    position: relative;
    display: block;
  }
  .movie-box a{
    position: relative;
    display: block;
  }
  .a-img{
    position: relative;
    display: block;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
  }
  .a-img img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .a-title{
    position: relative;
    display: block;
    margin: 20px 0;
    font-size: 18px;

  }
  .a-title small{
    display: block;
    float: right;
    font-size: 14px;
    color: #999;
    margin-top: 3px;
  }
  .a-desc{
    position: relative;
    display: block;
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 1.25;
    color: #333;
  }
</style>