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
    <>
      <header className="flex flex-col items-center justify-start gap-12 pt-14 pb-20">
        <MemoHeaderLogoIcon />
        <h1 className="text-2xl font-medium text-gray-50">Добро пожаловать!</h1>
      </header>
      <main className="flex w-full flex-col justify-start px-7 pb-7">
        <form className="flex flex-col justify-start gap-40">
          <fieldset className="flex flex-col justify-start gap-5">
            <label className="flex flex-col justify-start gap-2 text-xs text-suva-grey">
              Имя
              <input
                type="text"
                className="w-full rounded-lg bg-dark-charcoal p-4 text-sm text-gray-50"
                placeholder="Введите имя"
              />
            </label>
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
          <div className="flex flex-col items-center justify-start gap-4 mt-auto">
            <Button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded bg-royal-blue text-gray-50"
            >
              Зарегистрироваться
            </Button>
            <p className="text-xs text-suva-grey">
              Уже зарегистрированы?{" "}
              <Link href="/login" className="text-royal-blue">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
