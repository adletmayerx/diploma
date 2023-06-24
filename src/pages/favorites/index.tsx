import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
  type NextPage,
} from "next";
import { type Session, getServerSession } from "next-auth";
import { Footer, Movies, Search, MoviesCard } from "~/components";
import { Button } from "~/components/shared";
import { authOptions } from "~/server/auth";

const FavouritesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const MOVIES = [
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-mine-shaft">
      <div className="flex w-full max-w-7xl flex-col">
        <Search />
        <Movies
          movies={MOVIES}
          CardComponent={MoviesCard}
          cardType={"favorites"}
        />
        <Button
          className={
            "mx-auto mt-12 mb-20 flex h-9 w-60 items-center justify-center rounded-md bg-dark-charcoal text-xs font-medium text-gray-50 md:w-80"
          }
        >
          Ещё
        </Button>
        <Footer />
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

export default FavouritesPage;
