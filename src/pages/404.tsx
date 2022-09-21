import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import NextLink from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="NLW e-Sports | 404 Página não encontrada"
        description="Error 404 Página não encontrada"
      />

      <div className="h-screen w-full flex flex-col justify-center">
        <strong className="bg-nlw-gradient text-transparent bg-clip-text text-9xl font-black mx-auto">
          Oops!
        </strong>

        <main className="max-w-lg w-full mx-auto flex flex-col gap-2 mt-2">
          <h1 className="mx-auto mt-6 text-xl text-white font-bold text-center">
            404 - PAGE NOT FOUND
          </h1>

          <p className="mx-auto text-gray-300 text-center">
            A página que você esta procurando pode ter sido removida ou esta
            temporariamente indisponível
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

export default NotFoundPage;
