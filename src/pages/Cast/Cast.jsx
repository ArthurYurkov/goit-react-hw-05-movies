import { fetchMovieCast } from 'Fetch/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  const getMovieCast = async movieId => {
    try {
      await fetchMovieCast(movieId).then(res => setMovieCast(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      <div className={styles.container}>
        {movieCast
          ? movieCast.map(actor => {
              return (
                <div key={actor.id} className={styles.actorItem}>
                  <p className={styles.actorName}>{actor.original_name}</p>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : `https://image.tmdb.org/t/p/w300/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg`
                    }
                    alt={actor.original_name}
                  />

                  <p className={styles.characterName}>
                    Character: <br />
                    {actor.character}
                  </p>
                </div>
              );
            })
          : 'oops'}
      </div>
    </>
  );
}
