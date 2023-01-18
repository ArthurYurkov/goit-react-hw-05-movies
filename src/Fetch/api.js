import axios from 'axios';

const URL_KEY = 'https://api.themoviedb.org/3';
const API_KEY = 'eebb0a433327e7b1272200d09c61d355';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${URL_KEY}/trending/movie/day?api_key=${API_KEY}`
  );

  return data.results;
};

export const fetchSearchMovies = async movie => {
  const { data } = await axios.get(
    `${URL_KEY}/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}`
  );
  return data.results;
};

export const fetchMoviesById = async movieId => {
  const { data } = await axios.get(
    `${URL_KEY}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${URL_KEY}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${URL_KEY}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data.results;
};
