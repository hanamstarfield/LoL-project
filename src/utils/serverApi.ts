"use server";
import { ChampionData } from "@/type/Champion";
import { Items } from "@/type/Item";

const VERSIONS_API = "https://ddragon.leagueoflegends.com/api/versions.json";
const CHAMPIONS_API = (version: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`;
const ITEM_API = (version: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`;

// 챔피언 목록 api
export const getChampion = async () => {
  try {
    const versionRes = await fetch(VERSIONS_API);

    const version = await versionRes.json();
    const lastVersion = version[0];
    const champions = await fetch(CHAMPIONS_API(lastVersion), {
      next: {
        revalidate: 86400,
      },
    });
    const championsData: ChampionData = await champions.json();
    return { championsData };
  } catch (error) {
    console.error("챔피언 api 에러: ", error);
  }
};

// 아이템 목록 api
export const getItem = async () => {
  try {
    const versionRes = await fetch(VERSIONS_API);
    const version = await versionRes.json();
    const lastVersion = version[0];
    const items = await fetch(ITEM_API(lastVersion));
    const itemsData: Items = await items.json();
    return { itemsData };
  } catch (error) {
    console.error("아이템 api 에러", error);
  }
};
