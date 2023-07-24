import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

import { requestMovieReviews } from 'Services/ServicesApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const movieReview = await requestMovieReviews(movieId);
        // setMovieReviews(movieReview);
        setMovieReviews(movieReview.results);
        console.log(movieReview);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

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
            {movieReviews.map(review => {
              return (
                <li key={review.id}>
                  <p>
                    Author : <span>{review.author}</span>
                  </p>
                  <p>
                    Content : <span>{review.content}</span>
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

export default Reviews;
