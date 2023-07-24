import axios from 'axios';

const KEY = '149c378c60b6910f81bab715963f1e90';
const time_window = 'day';

const $instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const requestTopRatedMovieList = async () => {
  const { data } = await $instance.get(
    `trending/all/${time_window}?api_key=${KEY}`
  );
  return data;
};

export const requestMovieReviewById = async movieId => {
  const { data } = await $instance.get(`movie/${movieId}?api_key=${KEY}`);
  return data;
};

export const requestMovieReviews = async movieId => {
  const { data } = await $instance.get(
    `movie/${movieId}/reviews?api_key=${KEY}`
  );
  return data;
};

export const requestMovieCast = async movieId => {
  const { data } = await $instance.get(
    `movie/${movieId}/credits?api_key=${KEY}`
  );
  return data;
};

export const requestMoviePoster = async posterPath => {
  const { data } = await $instance.get(`movie/${posterPath}?api_key=${KEY}`);
  return data;
};

export const requestMoviesSearch = async query => {
  const { data } = await $instance.get(
    `search/movie?api_key=${KEY}&query=${query}`
  );
  return data;
};
