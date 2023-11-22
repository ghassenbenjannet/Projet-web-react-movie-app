import React from "react";
import { Card } from "../../atoms/Cards/card";
import { Movie } from "../../../infrastructure/models/Movie";

export const CardMovie: React.FC<Movie> = ({ title, poster_path,id }) => {
  console.log(poster_path)
  return (
    <Card classes='shadow-lg h-auto transition ease-in-out rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl'>
      <a href={`/movie/${id}`}>
        <img src={poster_path} alt={title} className="rounded-md object-cover" />
      </a>
    </Card>
  );
};