import Image from "next/image";
import { MemoHeartIcon, MemoHeartFilledIcon, MemoRemoveIcon } from "./icons";
import { type CardComponentType } from "~/types";
import { Button } from "./shared";

const MoviesCard = ({
  type,
  image,
  description,
  title,
  duration,
  isSaved,
}: CardComponentType) => {
  return (
    <div className="flex shrink-0 flex-col overflow-hidden rounded bg-raisin-black">
      <div className="relative h-40 w-72 shrink-0 overflow-hidden rounded md:h-44 md:w-80 xl:h-56 xl:w-96">
        <Image src={image} alt={description} fill></Image>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between">
          <p className="grow text-xs font-medium text-gray-50">{title}</p>
          <Button className="">
            {type === "favorites" ? (
              <MemoRemoveIcon />
            ) : isSaved ? (
              <MemoHeartFilledIcon />
            ) : (
              <MemoHeartIcon />
            )}
          </Button>
        </div>
        <p className="text-xs text-suva-grey">{duration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
