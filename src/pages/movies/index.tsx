import { type NextPage } from "next";
import { Search } from "~/components";

const Movies: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-mine-shaft">
      <div className="flex max-w-7xl flex-col"></div>
      <Search />
    </div>
  );
};

export default Movies;
