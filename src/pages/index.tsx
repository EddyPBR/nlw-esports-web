import type { NextPage } from "next";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { CreateAdBanner } from "~components/CreateAdBanner";
import { GameBanner } from "~components/GameBanner";

import { fetchHighlightedGames, HighlightedGamesDTO } from "~services/v1/games";

const Home: NextPage = () => {
  const [games, setGames] = useState<HighlightedGamesDTO[]>([]);

  useEffect(() => {
    fetchHighlightedGames()
      .then((result) => setGames(result.data))
      .catch((error) => toast.error(error?.message));
  }, []);

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
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game.ads.length}
          />
        ))}
      </section>

      <CreateAdBanner />
    </main>
  );
};

export default Home;
