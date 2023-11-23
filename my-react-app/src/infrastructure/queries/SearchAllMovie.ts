import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '../models/Movie';
import { SEARCH_MOVIE_ENDPOINT } from '../config/Endpoints';
import { tmdb_api_acces } from '../config/TMDBConfig';

interface TMDBApiResponse {
  results: Movie[];
}

interface UseMovieSearchProps {
  query: string;
}

interface UseMovieSearchResult {
  movies: Movie[];
  isLoading: boolean;
  error: Error | null;
}

export const useMovieSearch = ({ query }: UseMovieSearchProps): UseMovieSearchResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get<TMDBApiResponse>(
          SEARCH_MOVIE_ENDPOINT,
          {
            params: {
              query,
              include_adult: false,
              language: 'en-US',
              page: 1,
            },
            headers: {
              Authorization: `Bearer ${tmdb_api_acces.accessToken}`,
              Accept: 'application/json',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchData();
    } else {
      setMovies([]);
      setIsLoading(false);
      setError(null);
    }
  }, [query]);

  return { movies, isLoading, error };
};

export default useMovieSearch;
