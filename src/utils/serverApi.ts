"use server";
import { ChampionData } from "@/type/Champion";
import { ChampDetailData } from "@/type/ChampionDetail";
import { ItemsData } from "@/type/Item";

const VERSIONS_API = "https://ddragon.leagueoflegends.com/api/versions.json";
const CHAMPIONS_API = (version: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`;
const ITEM_API = (version: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`;
const CHAMPIONS_DETAIL_API = (version: string, id: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`;

// 최신 버전 가져오기
const getVersion = async (): Promise<string> => {
  const versionRes = await fetch(VERSIONS_API);
  const version = await versionRes.json();
  return version[0];
};

// 챔피언 목록 api
export const getChampion = async (): Promise<
  ChampionData | { message: string }
> => {
  const version = await getVersion();
  const res = await fetch(CHAMPIONS_API(version), {
    next: {
      revalidate: 86400,
    },
  });
  if (!res.ok) {
    return { message: "챔피언 api 데이터 에러!" };
  }

  const championsData: ChampionData = await res.json();
  return championsData;
};

// 아이템 목록 api
export const getItem = async (): Promise<ItemsData | { message: string }> => {
  const version = await getVersion();
  const res = await fetch(ITEM_API(version));
  if (!res.ok) {
    return { message: "챔피언 api 데이터 에러!" };
  }
  const itemsData: ItemsData = await res.json();
  return itemsData;
};

// 챔피언 디테일 api
export const getCampDetail = async (
  id: string
): Promise<ChampDetailData | { message: string }> => {
  const version = await getVersion();
  const res = await fetch(CHAMPIONS_DETAIL_API(version, id), {
    cache: "no-store",
  });
  if (!res.ok) {
    return { message: "챔피언 api 데이터 에러!" };
  }

  const campDetailData = await res.json();
  const test = campDetailData.data[id];

  console.log(test);
  return test;
};
