import { useQuery } from 'react-query';
import axios from 'axios';
import { tmdb_api_acces } from '../config/TMDBConfig';
import { MOVIES_ENDPOINT } from '../config/Endpoints';

export const useFetchMovieListRule = () => {
  const { apiKey } = tmdb_api_acces;

  const { data, error, isLoading } = useQuery('movies', async () => {
    const response = await axios.get(MOVIES_ENDPOINT, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data.results as MovieProps[];
  });

  return {
    movies: data,
    isError: error,
    isLoading,
  };
};

interface MovieProps {
  title: string;
  poster_path: string;
  id: number;
}