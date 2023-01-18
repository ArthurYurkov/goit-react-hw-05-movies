import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'Fetch/api';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
  const [trendMovie, setTrendMovie] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();

  const getTrendMovies = async () => {
    try {
      await fetchTrendingMovies().then(res => setTrendMovie(res));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getTrendMovies();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          {trendMovie.map(movie => {
            return (
              <Link
                to={`/movies/${movie.id}`}
                state={{ location }}
                key={movie.id}
                className={styles.movieItem}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path} `}
                  alt={movie.title}
                />
                <p className={styles.movieTitle}>
                  {movie.title ? movie.title : ' No information'}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
