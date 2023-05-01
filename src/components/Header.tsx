import React from "react";
import MemoLogoIcon from "./icons/HeaderLogoIcon";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Button } from "./shared";
import Link from "next/link";

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
          <Link
            className="inline-flex items-center justify-center text-xs font-medium text-gray-50"
            href={"/register"}
          >
            Регистрация
          </Link>
          <Link
            className="inline-flex h-7 w-14 items-center justify-center rounded bg-shamrock align-middle text-xs font-medium leading-relaxed text-gray-900 md:h-8 md:w-20"
            href={"/login"}
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
