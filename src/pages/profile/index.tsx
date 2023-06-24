import clsx from "clsx";
import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
  type NextPage,
} from "next";
import { getServerSession } from "next-auth";
import { Button } from "~/components/shared";
import useFormWithValidation from "~/hooks/use-form";
import { authOptions } from "~/server/auth";
import { signOut } from "next-auth/react";
import { api } from "~/utils/api";
import { profileEditSchema } from "~/validation/profile";
import { type Session } from "next-auth/core/types";

const ProfilePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const name = data?.user.name;
  const email = data?.user.email;

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ username: name || "", email: email || "" });

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

    if (isLoading || !isValid) {
      return;
    }

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
              <span className="flex justify-between gap-1">
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
              </span>
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
              <span className="flex justify-between gap-1">
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
              </span>
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
          <Button
            type="submit"
            className="text-xs text-gray-50 disabled:cursor-default disabled:text-charcoal md:text-sm"
            disabled={isLoading || !isValid}
          >
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

export const getServerSideProps: GetServerSideProps<{
  data: Session;
}> = async (context) => {
  const data = await getServerSession(context.req, context.res, authOptions);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default ProfilePage;
