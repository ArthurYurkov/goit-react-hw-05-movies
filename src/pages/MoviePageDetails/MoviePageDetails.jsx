import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'Fetch/api';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function MoviePageDetails() {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState(null);

  const getMovieDetails = async movieId => {
    try {
      await fetchMoviesById(movieId).then(res => setMovieItem(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.movieList}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieItem?.poster_path}`}
            />
          </div>
          <div className={styles.movieInfo}>
            <h2 className={styles.movieTitle}>{movieItem?.title}</h2>
            <p>User Score: {Math.round(movieItem?.vote_average) * 10}%</p>
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>{movieItem?.overview}</p>
            </div>
            <div className={styles.genreContainer}>
              <h3>Genres</h3>
              {movieItem?.genres.map(gen => {
                return (
                  <p key={gen.id} className={styles.genresItem}>
                    {gen.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btnItem
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btnItem
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
