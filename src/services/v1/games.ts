import { api, apiException } from "~services/api";

export type AdDTO = {
  id: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  createdAt: string;
  gameId: string;
};

export type HighlightedGamesDTO = {
  id: string;
  title: string;
  bannerUrl: string;
  ads: AdDTO[];
};

export const fetchHighlightedGames = async () => {
  try {
    return await api.get<HighlightedGamesDTO[]>("/v1/games");
  } catch (error) {
    throw apiException(error);
  }
};
