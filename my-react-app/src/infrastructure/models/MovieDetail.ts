import { MovieCredits } from './MovieCredit';
import { MovieImages } from './MovieImage';

export interface MovieDetail {
    id: number;
    title: string;
    original_title: string;
    homepage: string;
    overview: string;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
    genres: { id: number; name: string }[];
    release_date: string;
    credits: MovieCredits;
    images: MovieImages;
  }  