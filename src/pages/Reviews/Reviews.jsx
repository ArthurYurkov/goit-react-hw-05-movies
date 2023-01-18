import { fetchMovieReviews } from 'Fetch/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  const getMovieReviews = async movieId => {
    try {
      await fetchMovieReviews(movieId).then(res => setMovieReviews(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.reviews}>
          {movieReviews.length ? (
            movieReviews.map(review => {
              return (
                <div key={review.id} className={styles.reviewsItem}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </div>
              );
            })
          ) : (
            <div className={styles.error}>
              <p>We don't have any reviews for this movie</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
