import { type NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="flex grow h-full flex-col items-center bg-mine-shaft pt-80 pb-8 md:pt-96 md:pb-52">
      <h1 className="text-7xl text-gray-50 md:text-9xl">404</h1>
      <p className="mt-3 text-xs text-gray-50 md:text-base">
        Страница не&nbsp;найдена
      </p>
      <Link className="mt-auto text-xs text-royal-blue md:text-sm" href={"/"}>
        Назад
      </Link>
    </div>
  );
};

export default Custom404;
