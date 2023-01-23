import type { NextPage } from "next";
import Head from "next/head";
import {
  Banner,
  Depositions,
  Familiar,
  Footer,
  Header,
  Insurers,
  Main,
  ProductsCaroussel,
} from "../components/E__export";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>La Costa Corretora</title>
        <meta
          name="description"
          content="A Lacosta Corretora oferece soluções personalizadas de seguros para garantir a tranquilidade de você e sua família. Entre em contato conosco e solicite agora uma cotação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <ProductsCaroussel />
      <Familiar />
      <Insurers />
      <Banner />
      <Depositions />
      <Footer />
    </>
  );
};

export default Home;
