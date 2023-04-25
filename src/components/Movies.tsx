import React from "react";
import MoviesCard from "./MoviesCard";

const Movies = () => {
  return (
    <div className="flex flex-col items-center justify-start px-3 pt-10 pb-20">
      <MoviesCard isSaved={true} />
      <MoviesCard isSaved={false} />
      <MoviesCard isSaved={true} />
    </div>
  );
};

export default Movies;
