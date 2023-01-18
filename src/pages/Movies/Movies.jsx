import { fetchSearchMovies } from 'Fetch/api';
import SearchBar from 'pages/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

export default function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  const getSearchMovies = async searchQuery => {
    try {
      await fetchSearchMovies(searchQuery).then(res => setMovieList(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getSearchMovies(searchQuery);
  }, [searchQuery]);

  const onQueryChange = newQuery => {
    if (newQuery === searchQuery) {
      return alert('This film already found');
    }
    setSearchQuery(newQuery);
  };

  return (
    <>
      <SearchBar onChangeQuery={onQueryChange} />
      <div className={styles.container}>
        <div className={styles.list}>
          {movieList.map(movie => {
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
