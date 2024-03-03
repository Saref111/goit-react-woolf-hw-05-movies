import axios from 'axios';

const API_KEY = 'e13df1ab94334c8c1ab68ca9010891e0';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  return await axios.get(`/trending/movie/day`);
};

export const fetchMovieDetails = async (movieId) => {
  return await axios.get(`/movie/${movieId}`);
};

export const fetchMovieCast = async (movieId) => {
  return await axios.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = async (movieId) => {
  return await axios.get(`/movie/${movieId}/reviews`);
};

export const fetchSearchMovies = async (query) => {
  return await axios.get(`/search/movie?query=${query}`);
};
