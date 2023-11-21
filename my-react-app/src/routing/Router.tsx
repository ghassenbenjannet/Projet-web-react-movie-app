import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MaintenancePage } from './MaintenancePage';
import { MovieList } from '../components/organisms/MovieList/MovieList';
import { ErrorPage } from './ErrorPage';
import { MovieDetailsPage } from '../components/organisms/MovieDetails/MovieDetails';
import { FavoritesMovies } from '../components/organisms/MovieList/MovieFavoris';
import { checkMaintenanceStatus } from '../infrastructure/services/useBackend'; // Importez le service

export const Router: React.FC = () => {
  const [maintenance, setMaintenance] = useState<boolean>(false);

  const fetchMaintenanceStatus = async () => {
    const maintenanceStatus = await checkMaintenanceStatus();
    setMaintenance(maintenanceStatus);
  };

  useEffect(() => {
    fetchMaintenanceStatus();

    const intervalId = setInterval(fetchMaintenanceStatus, 500);

    return () => clearInterval(intervalId);
  }, []);

  if (maintenance) {
    return <MaintenancePage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies_list" />} />
      <Route path="/movies_list" element={<MovieList />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/favorites" element={<FavoritesMovies />} />
    </Routes>
  );
};

export default Router;
