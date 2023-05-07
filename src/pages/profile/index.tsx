import clsx from "clsx";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import useFormWithValidation from "~/hooks/use-form";

const ProfilePage: NextPage = () => {
  const session = useSession();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  return (
    <div className="flex flex-col items-center justify-start px-7 pt-16 pb-9">
      <h1 className="text-2xl text-gray-50 "></h1>
      <form className="flex w-full flex-col justify-start">
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
              <span
                className={clsx(
                  "text-xs text-red-600",
                  errors.username ? "visible" : "hidden"
                )}
              >
                {errors.username}
              </span>
            </div>
          </label>
          <label className="flex flex-col gap-2 gap-1">
            <div className="flex justify-between">
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
                "text-xs text-red-600",
                errors.email ? "visible" : "hidden"
              )}
            >
              {errors.email}
            </span>
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default ProfilePage;
