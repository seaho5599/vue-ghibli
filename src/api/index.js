import axios from "axios";
// http Reqeust 및 Response URL
const config = {
  baseUrl: "https://ghibliapi.herokuapp.com",
};
// 전체 API 데이터 호출 함수
function fetchAllApi() {
  // axios 호출의 결과는 Promise 객체이므로
  // then() , catch() 를 통해 결과를 확인 가능

  return axios.get(`${config.baseUrl}/films`);
}
// 영화의 상세 정보
function fetchDetailInfo(_id) {
  return axios.get(`${config.baseUrl}/films/${_id}`);
}

export { fetchAllApi, fetchDetailInfo };
