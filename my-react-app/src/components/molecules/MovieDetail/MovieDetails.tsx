import React from 'react';
import { MovieDetail } from '../../../infrastructure/models/MovieDetail';
import { POSTER_BASE_URL } from '../../../infrastructure/config/Endpoints';
import { format } from 'date-fns';



interface MovieDetailProps {
  movieDetail: MovieDetail;
}
  
const MovieDetails: React.FC<MovieDetailProps> = ({ movieDetail }) => {
  const releaseDate = new Date(movieDetail.release_date);
  const formattedDate =format(releaseDate, 'MMM dd, yyyy');
  React.useEffect(() => {
    document.title = "Movie: "+ movieDetail.original_title;
  }, []);

    return (
    <div className="flex flex-col items-center flex-wrap gap-4 justify-center sm:flex-row sm:items-end">
     
     <img
        src={`${POSTER_BASE_URL}${movieDetail.poster_path}`}
        className="w-[18.75rem] h-[28.125rem] flex-shrink-0 rounded-[0.375rem] filter brightness-75"
        style={{ boxShadow: '0px 0px / 100% 100% no-repeat lightgray' }}
        alt="Movie Poster"
      />
     <div className='flex flex-col flex-1 text-white font-roboto'>
        <p className="text-4xl">{movieDetail.title}</p>
        <p className="text-md">{movieDetail.overview}</p>
        <p className="leading-normal italic mt-2">
          {movieDetail.genres.map(genre => genre.name).join(', ')}
        </p>
        <p className="text-md">{formattedDate}</p>
</div>

      
    </div>
  );
};

export default MovieDetails;
