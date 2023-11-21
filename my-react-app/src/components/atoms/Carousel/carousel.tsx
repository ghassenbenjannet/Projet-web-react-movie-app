import React from 'react';
import Slider from 'react-slick';


interface CarouselProps {
  defaultSlidesToShow: number;
  slidesToShow_1024: number;
  slidesToShow_600: number;
  children?: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ defaultSlidesToShow, slidesToShow_1024, slidesToShow_600, children }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: defaultSlidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow_1024,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow_600,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    
  };
  console.log('Carousel Settings:', settings);
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
