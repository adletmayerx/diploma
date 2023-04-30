import { type NextPage } from "next";
import { Button } from "~/components/shared";
import { MemoHeaderLogoIcon } from "~/components/icons";
import Image from "next/image";
import { useState } from "react";
import { PASSWORD_BUTTON_IMAGE_SRC } from "~/utils/constants";
import Link from "next/link";

const RegisterPage: NextPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordButtonImageSrc = isPasswordVisible
    ? PASSWORD_BUTTON_IMAGE_SRC.show
    : PASSWORD_BUTTON_IMAGE_SRC.hide;
  const passwordInputType = isPasswordVisible ? "text" : "password";

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-start pb-7 md:pt-56 md:pb-44 xl:pt-16  xl:pb-16">
      <header className="flex w-64 flex-col items-center justify-start gap-12 pt-14 pb-20 md:w-96 md:items-start md:pb-10">
        <MemoHeaderLogoIcon />
        <h1 className="text-2xl font-medium text-gray-50">Рады видеть!</h1>
      </header>
      <main className="flex w-64 grow flex-col justify-start md:w-96 ">
        <form className="flex grow flex-col justify-between">
          <fieldset className="flex flex-col justify-start gap-5">
            <label className="flex flex-col justify-start gap-2 text-xs text-suva-grey">
              Email
              <input
                type="email"
                className="w-full rounded-lg bg-dark-charcoal p-4 text-sm text-gray-50"
                placeholder="Введите имя"
              />
            </label>
            <label className="flex flex-col justify-start gap-2 text-xs text-suva-grey">
              Пароль
              <div className="flex items-center justify-start rounded-lg bg-dark-charcoal pr-4">
                <input
                  type={passwordInputType}
                  className="grow rounded-lg bg-dark-charcoal p-4 text-sm text-gray-50"
                  placeholder="Введите имя"
                />
                <Button onClick={togglePasswordVisibility}>
                  <Image
                    src={passwordButtonImageSrc}
                    width={32}
                    height={32}
                    alt={
                      "картинка глазика для скрытия/раскрытия пароля. бесплатной svg-иконки не нашел"
                    }
                  ></Image>
                </Button>
              </div>
            </label>
          </fieldset>
          <div className="flex flex-col items-center justify-start gap-4">
            <Button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded bg-royal-blue text-sm text-gray-50"
            >
              Войти
            </Button>
            <p className="text-xs text-suva-grey md:text-sm">
              Ещё не зарегистрированы?{" "}
              <Link href="/register" className="text-royal-blue">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterPage;
