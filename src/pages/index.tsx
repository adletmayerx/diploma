import { type NextPage } from "next";
import { Promo, About, Technologies, Student } from "~/components";

const Home: NextPage = () => {
  return (
    <>
      <Promo />
      <About />
      <Technologies />
      <Student />
    </>
  );
};

export default Home;
