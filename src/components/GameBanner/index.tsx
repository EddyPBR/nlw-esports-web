import { FC } from "react";

import NextImage from "next/image";
import NextLink from "next/link";

type Props = {
  bannerUrl: string;
  title: string;
  adsCount: number;
};

export const GameBanner: FC<Props> = ({ bannerUrl, title, adsCount }) => {
  return (
    <NextLink href="#" passHref>
      <a className="relative rounded-lg overflow-hidden">
        <NextImage src={bannerUrl} alt={title} width={180} height={240} />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-1.5 left-0 right-0 rounded-md">
          <strong className="font-bold text-white block">{title}</strong>
          <span className="text-zinc-300 text-sm block">
            {adsCount} anúncios(s)
          </span>
        </div>
      </a>
    </NextLink>
  );
};
