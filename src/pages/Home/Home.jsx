import { requestTopRatedMovieList } from 'Services/ServicesApi';
import Loader from 'components/Loader/Loader';
import Movie from 'components/Movie/Movie';
import React, { useEffect, useState } from 'react';
import { StyledHome } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const trendingMoviesList = await requestTopRatedMovieList();
        setTrendingMovies(trendingMoviesList.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <StyledHome>
      <h1>Trending today</h1>
      {error && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ul>
          <Movie movies={trendingMovies}></Movie>
        </ul>
      )}
    </StyledHome>
  );
};

export default Home;
