import React, { useEffect } from 'react';
import { CardMovie } from '../../molecules/MovieCard/MovieCard';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { useFetchMovieList } from '../../../infrastructure/queries/MovieListQuery';
import { POSTER_BASE_URL } from '../../../infrastructure/config/Endpoints';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../atoms/Loading/Loading';
import { Movie } from '../../../infrastructure/models/Movie';
import { MovieListContainer } from '../../atoms/MovieListContainer/MovieListContainer';

export const MovieList = () => {
  useEffect(() => {
    document.title = "Movies List";
  }, []);
  const { movies = [], isError, isLoading } = useFetchMovieList();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  if (isError) {
    navigate('/error');
    return null;
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className='flex flex-col gap-6 min-h-screen min-w-full p-12 dark:bg-gray-800'>
      <NavBar onChangeSearch={handleSearchChange} />
      <MovieListContainer>
        {isLoading ? <Loading /> : <Movies movies={filteredMovies} />}
      </MovieListContainer>
    </main>
  );
};



const Movies: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4'>
      {movies.map((movieToDiscover) => (
        <CardMovie
          key={movieToDiscover.id}
          id={movieToDiscover.id}
          title={movieToDiscover.title}
          poster_path={`${POSTER_BASE_URL}${movieToDiscover.poster_path}`}
        />
      ))}
    </div>
  );
};