import { type NextPage } from "next";
import { Search } from "~/components";

const Movies: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col">
        <Search />
      </div>
    </div>
  );
};

export default Movies;
