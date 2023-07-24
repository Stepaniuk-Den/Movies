import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledMovie, StyledNavLink } from './Movie.styled';
import PropTypes from 'prop-types';

const Movie = ({ movies }) => {
  const poster = `https://image.tmdb.org/t/p/w400`;
  const location = useLocation();
  // console.log(movies);
  return movies.map(movie => {
    return (
      <StyledMovie key={movie.id}>
        <StyledNavLink state={{ from: location }} to={`/movies/${movie.id}`}>
          <img
            src={poster + movie.poster_path}
            alt={movie.title ? movie.title : movie.name}
          />
          <p>{movie.title ? movie.title : movie.name}</p>
        </StyledNavLink>
      </StyledMovie>
    );
  });
};

Movie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default Movie;
