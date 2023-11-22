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
      <div className='flex flex-wrap gap-2 sm:justify-between dark:text-white'>
      <p className='text-2xl sm:text-4xl'>🎬🍿 Movie library: Favourites</p>
    </div>
       <div className="text-black dark:text-white">
            <BtnBack />
        </div>
        { favoriteMovies.length ==0 ?
        <div className="flex items-center bg-gray-500 text-white text-sm font-bold px-4 py-3 dark:text-black dark:bg-gray-200" role="alert">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
          <p>You don't have selected movies as favorites.</p>
        </div>
        :
        <MovieListContainer>
            <Movies movies={favoriteMovies} />
        </MovieListContainer>}
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
          poster_path={`${POSTER_BASE_URL}${movie.poster_path}`}
        />
      ))}
    </div>
  );
};