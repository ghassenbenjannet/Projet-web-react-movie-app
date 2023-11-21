import React from "react";
import { useParams } from 'react-router-dom';
import { BtnBack } from "../../atoms/Button/Back_btn";
import MovieDetails from "../../molecules/MovieDetail/MovieDetails";
import { POSTER_BASE_URL } from '../../../infrastructure/config/Endpoints';
import { useNavigate } from 'react-router-dom';
import { Loading } from "../../atoms/Loading/Loading";
import { useFetchMovieCreditsQuery } from '../../../infrastructure/queries/MovieCreditsQuery';
import MovieCredits from "../../molecules/MovieDetail/MovieCredits";
import { useFetchMovieDetailQuery } from "../../../infrastructure/queries/MovieDetailsQuery";
import { useFetchMovieImagesQuery } from "../../../infrastructure/queries/MovieImagesQuery";
import {MovieImages} from "../../molecules/MovieDetail/MovieImages";
import { useFavorites } from "../../../infrastructure/services/useFavorites";


export const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: credits, error: creditsError, isLoading: creditsLoading } = useFetchMovieCreditsQuery(Number(id));
  const { data: movieDetail, error, isLoading } = useFetchMovieDetailQuery(Number(id));
  const { data: images, error: imagesError, isLoading: imagesLoading } = useFetchMovieImagesQuery(Number(id));
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const [isFavorited, setIsFavorited] = React.useState(false);

  React.useEffect(() => {
    setIsFavorited(favorites.includes(Number(id)));
  }, [favorites, Number(id)]);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(Number(id));
    } else {
      addToFavorites(Number(id));
    }
  };

  if (isLoading || creditsLoading || imagesLoading) {
    return <div className="flex flex-col gap-6 min-h-screen min-w-full p-12 dark:bg-gray-800"><Loading/></div>;
  }

  if (error || creditsError || imagesError) {
    navigate('/error');
    return null;
  }

  return (
  <main className="flex min-h-screen min-w-full bg-cover" style={{backgroundImage: `url(${POSTER_BASE_URL}${movieDetail.poster_path})`}}>
      <div className="flex-1 flex flex-col gap-4 backdrop-blur-2xl bg-slate-800/40 p-6 lg:p-12 overflow-hidden text-white">
        <BtnBack />
        <MovieDetails movieDetail={movieDetail} />
        <a
  onClick={handleToggleFavorite}
  className={`flex items-center text-l ${isFavorited ? 'text-red-500' : 'text-white-500'} cursor-pointer`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={`bi bi-heart h-8 w-8 mr-1 ${isFavorited ? 'text-red-500' : 'text-white-500'}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.6 2 8 2 5.36 4.36 3 7 3c1.57 0 3.06.68 4 1.77C13.94 3.68 15.43 3 17 3c2.64 0 5 2.36 5 5 0 3.6-3.4 6.25-8.55 11.03L12 21.35z"
    />
  </svg>
  {isFavorited ? "Retirer des Favoris" : "Ajouter aux Favoris"}
</a>


        <MovieCredits credits={credits}/>
        <MovieImages images={images}></MovieImages>
      </div>
    </main>
  );
};