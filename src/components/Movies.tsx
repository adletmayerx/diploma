import { type FC } from "react";
import { type CardComponentType } from "~/types";

type Props = {
  movies: Array<Omit<CardComponentType, "type">>;
  CardComponent: FC<CardComponentType>;
  cardType: "movies" | "favourites";
};

const Movies = ({ movies, CardComponent, cardType }: Props) => {
  return (
    <div className="flex flex-col items-center justify-start  px-3 pt-10 pb-7 md:px-7 md:pt-16 xl:px-16">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-6">
        {movies.map((movie, i) => {
          return (
            <CardComponent
              key={i}
              type={cardType}
              isSaved={movie.isSaved}
              image={movie.image}
              description={movie.description}
              title={movie.title}
              duration={movie.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
