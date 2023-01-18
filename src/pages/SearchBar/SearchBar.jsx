import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function SearchBar({ onChangeQuery }) {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onChangeQuery(search);
  };

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form
        autoComplete="off"
        className={styles.searchContainer}
        onSubmit={handleSubmit}
      >
        <p className={styles.searchTitle}>Enter you're movie name</p>
        <input
          type="text"
          className={styles.inputStyle}
          value={search}
          onChange={handleInputChange}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

const propTypes = {
  onChangeQuery: PropTypes.func,
};
