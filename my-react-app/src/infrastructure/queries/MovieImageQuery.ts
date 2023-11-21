import { useQuery } from 'react-query';
import axios from 'axios';
import { MOVIE_IMAGES_ENDPOINT } from '../../infrastructure/config/Endpoints';
import { tmdb_api_acces } from '../config/TMDBConfig';

export const useFetchMovieImagesQuery = (movieId: number) => {
  if (movieId === undefined) {
    return {
      data: undefined,
      error: 'Movie ID is undefined',
      isLoading: false,
    };
  }

  const { apiKey } = tmdb_api_acces; 
  return useQuery(['movieImages', movieId], async () => {
    const response = await axios.get(`${MOVIE_IMAGES_ENDPOINT.replace('{movie_id}', movieId.toString())}`, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data;
  });
};