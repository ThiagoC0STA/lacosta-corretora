import type { NextPage } from "next";
import Head from "next/head";
import { Header, Main } from "../components/E__export";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>La costa Corretora</title>
        <meta
          name="description"
          content="A Lacosta Corretora oferece soluções personalizadas de seguros para garantir a tranquilidade de você e sua família. Entre em contato conosco e solicite agora uma cotação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
    </>
  );
};

export default Home;
