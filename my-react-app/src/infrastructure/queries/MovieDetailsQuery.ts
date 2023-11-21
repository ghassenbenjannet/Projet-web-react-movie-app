import { useQuery } from 'react-query';
import axios from 'axios';
import { MOVIE_DETAIL_ID_ENDPOINT } from '../config/Endpoints';
import { tmdb_api_acces } from '../config/TMDBConfig';

export const useFetchMovieDetailQuery = (id: number) => {
  if (id === undefined) {
    return {
      data: undefined,
      error: 'Movie ID is undefined',
      isLoading: false,
    };
  }

  const { apiKey } = tmdb_api_acces; 
  return useQuery(['movieDetail', id], async () => {
      const response = await axios.get(`${MOVIE_DETAIL_ID_ENDPOINT}${id}`, {
        params: {
          api_key: apiKey,
        },
      });
      return response.data;
    })
};