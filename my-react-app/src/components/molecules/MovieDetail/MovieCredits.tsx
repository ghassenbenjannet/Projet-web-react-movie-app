import React from 'react';
import { Cast } from '../../../infrastructure/models/MovieCredit';
import { Carousel } from '../../atoms/Carousel/carousel';

interface MovieCreditsProps {
  credits: { cast: Cast[] };
}

const MovieCredits: React.FC<MovieCreditsProps> = ({ credits }) => {
  return (
    <div>
      <h3 className="text-xl text-white font-semibold mb-2">Credits</h3>
      <div className="relative w-full" data-carousel="slide">
        <Carousel defaultSlidesToShow={6.5} slidesToShow_1024={4.25} slidesToShow_600={1.75}>
          {credits.cast.map((castMember: Cast) => (
            <div key={castMember.id} className="outline-none px-3">
              <img
                src={castMember.profile_path ? `http://image.tmdb.org/t/p/w185/${castMember.profile_path}` : '../../../incognito.png'}
                alt={castMember.name}
                className="rounded-lg w-40 h-60 object-cover"/>
              <p className="text-white text-sm mt-2">{castMember.name}</p>
              <p className="text-stone-300 text-sm">{castMember.character}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieCredits;