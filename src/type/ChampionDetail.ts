export type ChampDetailData = {
  data: {
    [key: string]: ChampDetail;
  };
};

export type ChampDetail = {
  type: string;
  format: string;
  version: string;
  data: {
    id: string;
    key: number;
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
};
