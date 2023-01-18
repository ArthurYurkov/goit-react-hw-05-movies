import { fetchSearchMovies } from 'Fetch/api';
import SearchBar from 'pages/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

export default function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const [searchParams, setSearchParams] = useSearchParams('');

  const location = useLocation();

  // const getSearchMovies = async currentQuery => {
  //   try {
  //     await fetchSearchMovies(currentQuery).then(res => setMovieList(res));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getSearchMovies = async searchMovie => {
      try {
        await fetchSearchMovies(searchMovie).then(res => {
          if (res.length === 0) {
            setMovieList([]);
            return;
          }
          setMovieList(res);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSearchMovies(searchMovie);
  }, [searchMovie]);

  const onQueryChange = newQuery => {
    if (newQuery === searchParams) {
      return alert('This film already found');
    }
    if (newQuery === '') {
      setMovieList([]);
      return;
    }
    setSearchParams({ query: newQuery });
    setSearchMovie(newQuery);
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
                state={{ from: location }}
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
