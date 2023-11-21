import React, { useEffect, useState } from "react";
import { useFavorites } from "../../../infrastructure/services/useFavorites";
import { MovieListContainer } from "../../atoms/MovieListContainer/MovieListContainer";
import { CardMovie } from "../../molecules/MovieCard/MovieCard";
import { POSTER_BASE_URL } from "../../../infrastructure/config/Endpoints";
import { Movie } from "../../../infrastructure/models/Movie";
import { fetchMovieById } from "../../../infrastructure/queries/FetchMovieByIdQuery";
import BtnBack from "../../atoms/Button/Back_btn";

export const FavoritesMovies: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const movies: Movie[] = [];
      for (const movieId of favorites) {
        const movieDetails = await fetchMovieById(movieId);
        movies.push(movieDetails);
      }
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, [favorites]);

  return (
    <main className='flex flex-col gap-6 min-h-screen min-w-full p-12 dark:bg-gray-800'>
       <div className="text-black dark:text-white">
            <BtnBack />
        </div>
        <MovieListContainer>
            <Movies movies={favoriteMovies} />
        </MovieListContainer>
    </main>
  );
};

const Movies: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4'>
      {movies.map((movie) => (
        <CardMovie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imageSrc={`${POSTER_BASE_URL}${movie.poster_path}`}
        />
      ))}
    </div>
  );
};