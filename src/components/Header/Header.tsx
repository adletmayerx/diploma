import React from "react";
import MemoLogoIcon from "../icons/LogoIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <MemoLogoIcon />
      <div className="flex justify-start gap-14 px-4 py-5">
        <button className="text-xs font-medium leading-relaxed text-gray-50">
          Регистрация
        </button>
        <button className="bg-shamrock text-xs font-medium leading-relaxed text-gray-900">
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
