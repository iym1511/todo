import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3aa7b1511fef07c89e9b5d3e52acd4c4",
    language: "ko-KR",
  },
});

export default instance;
