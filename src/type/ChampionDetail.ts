export type ChampDetailData = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampDetail;
  };
};

export type ChampDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
    sprite: string;
  };
  tags: string[];
  lore: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  spells: {
    id: string;
    name: string;
    description: string;
  };
  passive: {
    name: string;
    description: string;
  };
};
