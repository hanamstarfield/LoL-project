export type ChampionData = {
  data: {
    [key: string]: Champion;
  };
};

export type Champion = {
  version: string;
  id: string;
  key: number;
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
  tags: string[];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
};
