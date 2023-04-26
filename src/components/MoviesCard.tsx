import Image from "next/image";
import { MemoHeartIcon, MemoHeartFilledIcon } from "./icons";

type Props = {
  image: string;
  description: string;
  title: string;
  duration: string;
  isSaved: boolean;
};

const MoviesCard = ({
  image,
  description,
  title,
  duration,
  isSaved,
}: Props) => {
  return (
    <div className="flex shrink-0 flex-col overflow-hidden rounded bg-raisin-black">
      <div className="relative h-40 w-72 shrink-0 overflow-hidden rounded md:h-44 md:w-80 xl:h-56 xl:w-96">
        <Image src={image} alt={description} fill></Image>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between">
          <p className="grow text-xs font-medium text-gray-50">{title}</p>
          {isSaved ? <MemoHeartFilledIcon /> : <MemoHeartIcon />}
        </div>
        <p className="text-xs text-suva-grey">{duration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
