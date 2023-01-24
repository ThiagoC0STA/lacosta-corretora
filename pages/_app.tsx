import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../contexts/GlobalContext";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <LoadingAnimation />
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
