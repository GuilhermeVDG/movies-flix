import axios from "axios";

// Base URL: https://api.themoviedb.org/3/

// API URL: /movie/now_playing?api_key=f3bd324ee7a1d3df6e77d6d1f97317d5&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;