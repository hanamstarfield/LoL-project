export type ChampInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampDetail = {
  name: string;
  title: string;
  id: string;
  blurb: string;
  info: ChampInfo;
};

export type ChampDetailData = {
  data: {
    [key: string]: ChampDetail;
  };
};
