import { useState, useEffect } from 'react';
import * as API from '../services/fetchMoviesApi';
import MoviesList from 'components/MovieList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.getTrandingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <MoviesList movies={movies} titlePage={'Trending today'} />
    </>
  );
};

export default Home;
