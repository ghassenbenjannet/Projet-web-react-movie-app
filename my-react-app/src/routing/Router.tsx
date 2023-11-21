import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MovieList } from '../components/organisms/MovieList/MovieList';
import { ErrorPage } from './ErrorPage';
import { MovieDetailsPage } from '../components/organisms/MovieDetails/MovieDetails';


export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies_list" />} />
      <Route path="/movies_list" element={<MovieList />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/movies_list" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  );
};
export default Router;