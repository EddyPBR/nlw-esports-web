import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { DefaultSeo } from "next-seo";
import { SEO } from "~utils/SEO";

import "~styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
