import axios from 'axios';

const API_KEY = 'e13df1ab94334c8c1ab68ca9010891e0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  return await axios.get(`trending/movie/day`);
};
