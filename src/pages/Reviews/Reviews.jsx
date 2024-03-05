import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import sanitize from 'sanitize-html';
import css from './Reviews.module.scss';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetchMovieReviews(movieId);
      setReviews(response.data.results);
    };

    try {
      fetchReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} className={css.item}>
              <p>Author: {review.author}</p>
              <p dangerouslySetInnerHTML={{__html: sanitize(review.content)}}></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
