import React from "react";
import MemoLogoIcon from "../icons/LogoIcon";
import clsx from "clsx";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header
      className={clsx("flex items-center justify-between px-4 py-5", [
        router.pathname === "/" ? "bg-tiber" : "bg-mine-shaft",
      ])}
    >
      <MemoLogoIcon />
      <div className="flex justify-start gap-4">
        <button className="text-xs font-medium leading-relaxed text-gray-50">
          Регистрация
        </button>
        <button className="h-7 w-14 rounded bg-shamrock px-3 py-1 text-xs font-medium leading-relaxed text-gray-900">
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
