import clsx from "clsx";
import { GetServerSideProps, type NextPage } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/shared";
import useFormWithValidation from "~/hooks/use-form";
import { authOptions } from "~/server/auth";
import { signOut } from "next-auth/react";
import { api } from "~/utils/api";
import { profileEditSchema } from "~/validation/profile";

const ProfilePage: NextPage = () => {
  const { data } = useSession();
  const name = data?.user.name;
  const email = data?.user.email;

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ username: name || "", email: email || "" });

  if (!data?.user.name || !data?.user.email) {
    return (
      <div className="text-4xl text-green-50">
        Ошибка авторизации! иди фиксить
      </div>
    );
  }

  const { mutate, isLoading } = api.profile.edit.useMutation({
    onSuccess: () => {
      //todo popup success
    },
    onError: (e) => {
      //todo popup error
      console.error(e);
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const parsedValues = profileEditSchema.parse(values);

    mutate(parsedValues);
  };

  return (
    <div className="flex grow flex-col items-center justify-start px-7 pt-16 pb-9 md:pt-32 md:pb-10">
      <div className="flex w-64 grow flex-col justify-start md:w-96">
        <h1 className="text-center text-2xl text-gray-50">{`Привет, ${
          name || "иди фиксить"
        }`}</h1>
        <form
          className="mt-20 flex w-full grow flex-col justify-between gap-52 md:grow-0 md:justify-start"
          onSubmit={handleSubmit}
        >
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
          <Button type="submit" className="text-xs text-gray-50 md:text-sm">
            Редактировать
          </Button>
        </form>
        <Button
          className="mt-4 text-xs text-red-600 md:text-sm"
          onClick={() => void signOut({ callbackUrl: "/" })}
        >
          Выйти из&nbsp;аккаунта
        </Button>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
};

export default ProfilePage;
