import type { AppProps } from "next/app";
import { Global } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
