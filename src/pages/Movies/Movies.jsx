import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { requestMoviesSearch } from 'Services/ServicesApi';
import Movie from 'components/Movie/Movie';
import { StyledMovies } from './Movies.styled';

const Movies = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieSearchValue) return;
    const fetchMoviesSearch = async () => {
      try {
        setIsLoading(true);
        const movieSearchList = await requestMoviesSearch(movieSearchValue);
        setMovieSearch(movieSearchList);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesSearch();
  }, [movieSearchValue]);

  const onSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.children.search.value;
    setSearchParams({ query: searchValue });
    console.log(searchValue);
  };

  return (
    <StyledMovies>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          defaultValue={movieSearchValue}
          name="search"
          required
        />
        <button type="submit">Search</button>
      </form>
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
          {movieSearch.results?.length > 0 && (
            <Movie movies={movieSearch.results}></Movie>
          )}
        </ul>
      )}
    </StyledMovies>
  );
};

export default Movies;
