import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MovieList } from '../components/organisms/MovieList/MovieList';
import { ErrorPage } from './ErrorPage';


export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies_list" />} />
      <Route path="/movies_list" element={<MovieList />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;