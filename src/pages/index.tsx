import { type NextPage } from "next";
import { Promo, About, Technologies, Student, Footer } from "~/components";

const HomePage: NextPage = () => {
  return (
    <>
      <Promo />
      <About />
      <Technologies />
      <Student />
      <Footer />
    </>
  );
};

export default HomePage;
