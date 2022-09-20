import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastMovie = lazy(() => import('../pages/CastMovie/CastMovie'));
const ReviewsMovie = lazy(() => import('../pages/ReviewsMovie/ReviewsMovie'));
const PageNotFoud = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<MovieSearch />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>

          <Route path="*" element={<PageNotFoud />} />
        </Route>
      </Routes>
    </>
  );
};
