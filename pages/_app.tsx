import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import GlobalContext from "../contexts/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <LoadingAnimation />
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
