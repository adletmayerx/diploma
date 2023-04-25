import { type NextPage } from "next";
import { Movies, Search } from "~/components";

const MoviesPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col">
        <Search />
        <Movies />
      </div>
    </div>
  );
};

export default MoviesPage;
