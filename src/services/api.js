import axios from 'axios';

const API_KEY = 'e13df1ab94334c8c1ab68ca9010891e0';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  return await axios.get(`trending/movie/day`);
};

export const fetchMovieDetails = async (movieId) => {
  return await axios.get(`movie/${movieId}`);
}
