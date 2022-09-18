import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import "~styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
