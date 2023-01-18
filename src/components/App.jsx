import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviePageDetails = lazy(() =>
  import('../pages/MoviePageDetails/MoviePageDetails')
);
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviePageDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
