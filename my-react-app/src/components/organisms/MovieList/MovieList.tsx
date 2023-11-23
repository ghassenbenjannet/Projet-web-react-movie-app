import React from 'react';
import { CardMovie } from '../../molecules/MovieCard/MovieCard';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { useFetchMovieList } from '../../../infrastructure/queries/MovieListQuery';
import { POSTER_BASE_URL } from '../../../infrastructure/config/Endpoints';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../atoms/Loading/Loading';
import { Movie } from '../../../infrastructure/models/Movie';
import { MovieListContainer } from '../../atoms/MovieListContainer/MovieListContainer';
import useMovieSearch from '../../../infrastructure/queries/SearchAllMovie';

export const MovieList = () => {
  const { movies = [], isError, isLoading } = useFetchMovieList();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const { movies: searchedMovies = [], isLoading: isSearching } = useMovieSearch({ query: searchQuery });
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "Movies List";
  }, []);
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  if (isError) {
    navigate('/error');
    return null;
  }

  const displayMovies = searchQuery ? searchedMovies : movies;

  return (
    <main className='bg-gray-200 flex flex-col gap-6 min-h-screen min-w-full p-12  dark:bg-gray-800'>
      <NavBar onChangeSearch={handleSearchChange} />
      <MovieListContainer>
        {isLoading || isSearching ? <Loading /> : <Movies movies={displayMovies} />}
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
