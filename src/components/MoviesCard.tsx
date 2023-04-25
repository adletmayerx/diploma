import Image from "next/image";
import { MemoHeartIcon, MemoHeartFilledIcon } from "./icons";

type Props = {
  isSaved: boolean;
};

const MoviesCard = ({ isSaved }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden rounded bg-raisin-black">
      <div className="relative h-40 w-72 shrink-0 overflow-hidden rounded">
        <Image src="/movies-image.png" alt="movies desc" fill></Image>
      </div>
      <div className="flex justify-between p-3">
        <div className="flex grow flex-col gap-3">
          <p className="text-xs font-medium text-gray-50">33 слова о дизайне</p>
          <p className="text-xs text-suva-grey">1ч 47м</p>
        </div>
        {isSaved ? <MemoHeartFilledIcon /> : <MemoHeartIcon />}
      </div>
    </div>
  );
};

export default MoviesCard;
