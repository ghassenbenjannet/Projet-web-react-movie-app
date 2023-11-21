import React from 'react';
import { MovieImages as MovieImagesType } from '../../../infrastructure/models/MovieImage';
import { Carousel } from '../../atoms/Carousel/carousel';

interface MovieImagesProps {
  images: MovieImagesType;
}

export const MovieImages: React.FC<MovieImagesProps> = ({ images }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-white">Images</h3>
      <div className="relative w-full" data-carousel="slide">
        <Carousel defaultSlidesToShow={2.25} slidesToShow_1024={2} slidesToShow_600={1}>
          {images.backdrops.map((image, index) => (
            <div key={index} className="outline-none px-2">
              <img
                src={`http://image.tmdb.org/t/p/w780/${image.file_path}`}
                alt={`Backdrop ${index}`}
                className="rounded-lg w-full h-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieImages;