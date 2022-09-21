import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import NextLink from "next/link";

const OfflinePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="NLW e-Sports | Você está Offline"
        description="Você está offline por por favor verifique a conexão com a internet"
      />

      <div className="h-screen w-full flex flex-col justify-center">
        <strong className="bg-nlw-gradient text-transparent bg-clip-text text-9xl font-black mx-auto">
          Oops!
        </strong>

        <main className="max-w-lg w-full mx-auto flex flex-col gap-2 mt-2">
          <h1 className="mx-auto mt-6 text-xl text-white font-bold text-center">
            Você esta offline
          </h1>

          <p className="mx-auto text-gray-300 text-center">
            Impossível carregar, você está offline cheque sua conexão com a
            internet.
          </p>

          <NextLink href="/" passHref>
            <a className="mt-6 py-3 px-4 text-white font-medium rounded bg-violet-500 hover:bg-violet-600 transition-colors w-36 mx-auto">
              Voltar ao inicio
            </a>
          </NextLink>
        </main>
      </div>
    </>
  );
};

export default OfflinePage;
