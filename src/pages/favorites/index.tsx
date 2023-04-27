import { type NextPage } from "next";
import { Footer, Movies, Search } from "~/components";

const MoviesPage: NextPage = () => {
  const MOVIES = [
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col">
        <Search />
        <Movies movies={MOVIES} />
        <Footer />
      </div>
    </div>
  );
};

export default MoviesPage;
