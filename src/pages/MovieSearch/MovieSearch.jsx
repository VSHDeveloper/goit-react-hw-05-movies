import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/fetchMoviesApi';
import MoviesList from 'components/MovieList/MoviesList';
import Loading from 'components/Loading/Loading';
import styles from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;

    setMovie(null);
    setTotalRezMovie(null);
    setShowLoading(true);

    API.getMoviesQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalRezMovie(data.total_results);
        setShowLoading(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
    // form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="query"
          className={styles.input}
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Enter movie name"
        />

        <button type="submit" className={styles.submit}>
          Search
        </button>
      </form>

      {showLoading && <Loading />}
      {movies && <MoviesList movies={movies} />}

      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default MovieSearch;
