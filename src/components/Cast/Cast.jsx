import { requestMovieCast } from 'Services/ServicesApi';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setIsLoading(true);
        const movieCredit = await requestMovieCast(movieId);
        setMovieCredits(movieCredit.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);
  const poster = `https://image.tmdb.org/t/p/w200`;

  console.log(movieCredits);
  return (
    <div>
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
        <div>
          <ul>
            {Array.isArray(movieCredits) &&
              movieCredits.map(cast => {
                return (
                  <li key={cast.id}>
                    <img src={poster + cast.profile_path} alt={cast.name} />
                    <p>
                      Name : <span>{cast.name}</span>
                    </p>
                    <p>
                      Character : <span>{cast.character}</span>
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cast;
