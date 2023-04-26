import React from "react";
import MoviesCard from "./MoviesCard";
import { Button } from "./shared";

type Props = {
  movies: Array<{
    image: string;
    description: string;
    title: string;
    duration: string;
    isSaved: boolean;
  }>;
};

const Movies = ({ movies }: Props) => {
  return (
    <div className="flex flex-col items-center justify-start gap-12 px-3 pt-10 pb-20">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-6">
        {movies.map((movie, i) => {
          return (
            <MoviesCard
              key={i}
              isSaved={movie.isSaved}
              image={movie.image}
              description={movie.description}
              title={movie.title}
              duration={movie.duration}
            />
          );
        })}
      </div>
      <Button
        className={
          "flex h-9 w-60 items-center justify-center rounded-md bg-dark-charcoal text-xs font-medium text-gray-50"
        }
      >
        Ещё
      </Button>
    </div>
  );
};

export default Movies;
