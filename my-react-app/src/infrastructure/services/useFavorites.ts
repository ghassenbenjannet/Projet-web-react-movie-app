import { useState } from "react";

const FAVORITES_KEY = "favoriteMovies";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorites = (movieId: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, movieId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((id) => id !== movieId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return { favorites, addToFavorites, removeFromFavorites };
};
