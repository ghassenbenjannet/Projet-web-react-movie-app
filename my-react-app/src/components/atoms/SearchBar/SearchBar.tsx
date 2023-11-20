import React from "react";
import { Card } from "../../atoms/Cards/card";

interface CardMovieProps {
  id: number;
  title: string;
  imageSrc: string;
}

export const CardMovie: React.FC<CardMovieProps> = ({ title, imageSrc,id }) => {
  return (
    <Card classes='shadow-lg h-auto transition ease-in-out rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl'>
      <a href={`/movie/${id}`}>
        <img src={imageSrc} alt={title} className="rounded-md object-cover" />
      </a>
    </Card>
  );
};