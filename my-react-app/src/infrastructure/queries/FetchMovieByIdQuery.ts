import axios from 'axios';
import { tmdb_api_acces } from '../config/TMDBConfig';
import { MOVIE_DETAIL_ID_ENDPOINT } from '../config/Endpoints';
import { Movie } from '../models/Movie';

export const fetchMovieById = async (movieId: number): Promise<Movie> => {
  try {
    const response = await axios.get(`${MOVIE_DETAIL_ID_ENDPOINT}${movieId}`, {
      params: {
        api_key: tmdb_api_acces.apiKey,
      },
    });

   return {
      id: response.data.id,
      title: response.data.title,
      poster_path: response.data.poster_path,
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};