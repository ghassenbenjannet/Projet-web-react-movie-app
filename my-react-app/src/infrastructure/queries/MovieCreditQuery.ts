import { useQuery } from 'react-query';
import axios from 'axios';
import { MOVIE_CREDIT_ENDPOINT } from '../config/Endpoints';
import { tmdb_api_acces } from '../config/TMDBConfig';

export const useFetchMovieCreditsQuery = (movieId: number) => {
  if (movieId === undefined) {
    return {
      data: undefined,
      error: 'Movie ID is undefined',
      isLoading: false,
    };
  }

  const { apiKey } = tmdb_api_acces; 
  return useQuery(['movieCredits', movieId], async () => {
    const response = await axios.get(`${MOVIE_CREDIT_ENDPOINT.replace('{movie_id}', movieId.toString())}`, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data;
  });
};