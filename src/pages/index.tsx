import { type NextPage } from "next";
import { Promo, About } from "~/components";

const Home: NextPage = () => {
  return (
    <>
      <Promo />
      <About />
    </>
  );
};

export default Home;
