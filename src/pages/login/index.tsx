import clsx from "clsx";
import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MemoDiscordLogoIcon,
  MemoGithubLogoIcon,
  MemoGoogleLogoIcon,
  MemoHeaderLogoIcon,
} from "~/components/icons";
import { Button } from "~/components/shared";
import useFormWithValidation from "~/hooks/use-form";
import { PASSWORD_BUTTON_IMAGE_SRC } from "~/utils/constants";

const RegisterPage: NextPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordButtonImageSrc = isPasswordVisible
    ? PASSWORD_BUTTON_IMAGE_SRC.show
    : PASSWORD_BUTTON_IMAGE_SRC.hide;
  const passwordInputType = isPasswordVisible ? "text" : "password";

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleGithubLoginButtonClick = () => {
    void signIn("github", { callbackUrl: "/" });
  };
  const handleGoogleLoginButtonClick = () => {
    void signIn("google", { callbackUrl: "/" });
  };
  const handleDiscordLoginButtonClick = () => {
    void signIn("discord", { callbackUrl: "/" });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    void signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-start pb-7 md:pt-56 md:pb-44 xl:pt-16  xl:pb-16">
      <header className="flex w-64 flex-col items-center justify-start gap-12 pt-14 pb-20 md:w-96 md:items-start md:pb-10">
        <MemoHeaderLogoIcon />
        <h1 className="text-2xl font-medium text-gray-50">Рады видеть!</h1>
      </header>
      <main className="flex w-64 grow flex-col justify-start md:w-96 ">
        <form
          className="flex grow flex-col justify-between gap-5"
          onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
        >
          <fieldset className="flex flex-col justify-start gap-5">
            <label className="flex flex-col justify-start gap-2 text-xs text-suva-grey">
              Email
              <input
                name="email"
                type="email"
                className="w-full rounded-lg bg-dark-charcoal p-4 text-sm text-gray-50"
                placeholder="Введите имя"
                required
                value={values.email || ""}
                onChange={handleChange}
              />
              <span
                className={clsx(
                  "text-xs text-red-600",
                  errors.email ? "visible" : "hidden"
                )}
              >
                {errors.email}
              </span>
            </label>
            <label className="flex flex-col justify-start gap-2 text-xs text-suva-grey">
              Пароль
              <div className="flex items-center justify-start rounded-lg bg-dark-charcoal pr-4">
                <input
                  name="password"
                  type={passwordInputType}
                  className="grow rounded-lg bg-dark-charcoal p-4 text-sm text-gray-50"
                  placeholder="Введите имя"
                  required
                  minLength={5}
                  maxLength={32}
                  value={values.password || ""}
                  onChange={handleChange}
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
              <span
                className={clsx(
                  "text-xs text-red-600",
                  errors.password ? "visible" : "hidden"
                )}
              >
                {errors.password}
              </span>
            </label>
          </fieldset>
          <div className="flex flex-col items-center justify-start gap-4">
            <Button
              type="submit"
              className={`flex h-12 w-full items-center justify-center rounded bg-royal-blue text-sm text-gray-50 
                           disabled:cursor-default disabled:bg-zinc-50 disabled:text-gray-900 disabled:opacity-100 disabled:hover:bg-zinc-50`}
              disabled={!isValid}
            >
              Войти
            </Button>
            <ul className="m-0 flex list-none items-start justify-start gap-2 p-0">
              <li className="inline-flex items-center justify-center rounded bg-dark-charcoal p-0 hover:bg-github">
                <Button
                  title="Войти с помощью Github"
                  className="inline-flex w-12 items-center justify-center p-0"
                  onClick={handleGithubLoginButtonClick}
                >
                  <MemoGithubLogoIcon />
                </Button>
              </li>
              <li className="inline-flex items-center justify-center rounded bg-dark-charcoal p-0 hover:bg-google">
                <Button
                  title="Войти с помощью Google"
                  className="inline-flex w-12 items-center justify-center p-0"
                  onClick={handleGoogleLoginButtonClick}
                >
                  <MemoGoogleLogoIcon />
                </Button>
              </li>
              <li className="inline-flex items-center justify-center rounded bg-dark-charcoal p-0 hover:bg-discord">
                <Button
                  title="Войти с помощью Discord"
                  className="inline-flex w-12 items-center justify-center p-0"
                  onClick={handleDiscordLoginButtonClick}
                >
                  <MemoDiscordLogoIcon />
                </Button>
              </li>
            </ul>
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
