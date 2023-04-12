import React from "react";
import MemoLogoIcon from "./icons/HeaderLogoIcon";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Button } from "./shared";

const Header = () => {
  const router = useRouter();

  return (
    <header
      className={clsx("flex justify-center", [
        router.pathname === "/" ? "bg-tiber" : "bg-mine-shaft",
      ])}
    >
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-8 xl:px-16">
        <MemoLogoIcon />
        <div className="flex justify-start gap-4 md:gap-8">
          <Button className="text-xs font-medium text-gray-50">
            Регистрация
          </Button>
          <Button className="h-7 w-14 rounded bg-shamrock align-middle text-xs font-medium leading-relaxed text-gray-900 md:h-8 md:w-20">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
