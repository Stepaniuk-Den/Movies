import { requestMovieReviewById } from 'Services/ServicesApi';
import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledMovieDetails,
  StyledNavLinkDetails,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setIsLoading(true);
        const movieDetailsById = await requestMovieReviewById(movieId);
        setMovieDetails(movieDetailsById);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  const { overview, poster_path, title, name } = movieDetails;
  const posterPath = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <StyledMovieDetails>
      <h2>Movie Details</h2>
      <NavLink className="goback" to={backLinkRef.current}>
        Go back
      </NavLink>
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
        <>
          <div className="movie-card">
            <div className="thumb">
              <img src={posterPath} alt={title ? title : name} />
            </div>
            <div className="movie-card-details">
              <h3>{title ? title : name}</h3>
              <p>{overview}</p>
            </div>
          </div>
          <ul>
            <li>
              <StyledNavLinkDetails to="reviews">Reviews</StyledNavLinkDetails>
            </li>
            <li>
              <StyledNavLinkDetails to="cast">Cast</StyledNavLinkDetails>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </StyledMovieDetails>
  );
};

export default MovieDetails;
