import "../styles/globals.css";
import "@chia-stack/react-ui/styles.css";
import type { AppProps } from "next/app";

function Web({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return <Component {...pageProps} />;
}

export default Web;
