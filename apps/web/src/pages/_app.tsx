import "@chia-stack/react-ui/styles.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function Web({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Web;
