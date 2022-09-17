import type { NextPage } from "next";
import NextImage from "next/image";

import { MagnifyingGlassPlus } from "phosphor-react";
import { CreateAdBanner } from "~components/CreateAdBanner";
import { GameBanner } from "~components/GameBanner";

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
            <GameBanner
              adsCount={index + 2}
              bannerUrl={`/images/image%20${index + 1}.png`}
              title={`Game ${index + 1}`}
              key={index + 1}
            />
          ))}
      </section>

      <CreateAdBanner />
    </main>
  );
};

export default Home;
