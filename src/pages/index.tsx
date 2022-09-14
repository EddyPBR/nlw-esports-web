import type { NextPage } from "next";
import NextImage from "next/image";

import { MagnifyingGlassPlus } from "phosphor-react";

const Home: NextPage = () => {
  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
      <NextImage
        src="/images/nlw-esports-logo.svg"
        width={286}
        height={160}
        alt="logo da NLW e-sports"
      />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <section className="grid grid-cols-6 gap-6 mt-20">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <a key={index + 1} href="#" className="relative rounded-lg overflow-hidden">
              <NextImage
                src={`/images/image%20${index + 1}.png`}
                alt={`Capa do jogo game-${index + 1}`}
                width={180}
                height={240}
              />

              <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-1.5 left-0 right-0 rounded-md">
                <strong className="font-bold text-white block">Game {index + 1}</strong>
                <span className="text-zinc-300 text-sm block">{index + 2} anúncios</span>
              </div>
            </a>
          ))}
      </section>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden ">
        <article className="bg-[#2A2634] px-8 py-6 flex justify-between">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="h-full py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:bg-violet-600 transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </article>
      </div>
    </main>
  );
};

export default Home;
