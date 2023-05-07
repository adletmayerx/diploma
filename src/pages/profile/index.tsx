import clsx from "clsx";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/shared";
import useFormWithValidation from "~/hooks/use-form";

const ProfilePage: NextPage = () => {
  const { data } = useSession();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  if (!data?.user.name) {
    return (
      <div className="text-4xl text-green-50">
        Ошибка авторизации! иди фиксить
      </div>
    );
  }
  const name = data.user.name;

  return (
    <div className="flex grow flex-col items-center justify-start px-7 pt-16 pb-9">
      <h1 className="text-2xl text-gray-50">{`Привет, ${name}`}</h1>
      <form className="mt-20 flex  w-full grow flex-col justify-between">
        <fieldset className="flex flex-col justify-start gap-4 text-xs text-gray-50">
          <label className="flex flex-col border-b border-charcoal pb-4">
            <div className="flex justify-between gap-1">
              <span className="">Имя</span>
              <input
                name="username"
                type="text"
                className="grow bg-transparent text-right"
                placeholder="Введите имя"
                required
                value={values.username || ""}
                onChange={handleChange}
              />
            </div>
            <span
              className={clsx(
                "self-end text-xs text-red-600",
                errors.username ? "visible" : "hidden"
              )}
            >
              {errors.username}
            </span>
          </label>
          <label className="flex flex-col gap-2">
            <div className="flex justify-between gap-1">
              <span>Email</span>
              <input
                name="email"
                type="email"
                className="grow bg-transparent text-right"
                placeholder="Введите email"
                required
                value={values.email || ""}
                onChange={handleChange}
              />
            </div>
            <span
              className={clsx(
                "self-end text-xs text-red-600",
                errors.email ? "visible" : "hidden"
              )}
            >
              {errors.email}
            </span>
          </label>
        </fieldset>

        <Button className="text-xs text-gray-50">Редактировать</Button>
      </form>

      <Button className="mt-4 text-xs text-red-600">
        Выйти из&nbsp;аккаунта
      </Button>
    </div>
  );
};

export default ProfilePage;
