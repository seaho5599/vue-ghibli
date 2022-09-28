import { createStore } from "vuex";
import { fetchAllApi, fetchDetailInfo } from "../api/index";

export default createStore({
  state: {
    movieList: [],
    movieInfo: {},
  },
  actions: {
    // 전체 데이터 호출
    fetchMovieList({ commit }) {
      fetchAllApi()
        .then((res) => {
          // console.log("1", res.data);
          commit("MOVIE_LIST_INIT", res.data);
        })
        .catch((err) => console.log(err));
    },
    // 상세 데이터
    fetchMovieInfo({ commit }, _id) {
      fetchDetailInfo(_id)
        .then((res) => {
          commit("MOVIE_INFO", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    MOVIE_LIST_INIT(state, payload) {
      state.movieList = payload;
    },
    MOVIE_INFO(state, payload) {
      state.movieInfo = payload;
    },
  },
  getters: {
    getMoiveList(state) {
      return state.movieList;
    },
    getMoiveInfo(state) {
      return state.movieInfo;
    },
  },
});
