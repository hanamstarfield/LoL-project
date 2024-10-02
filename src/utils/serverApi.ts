"use server";
import { ChampionData } from "@/type/Champion";
import { ChampDetail, ChampDetailData } from "@/type/ChampionDetail";
import { Items } from "@/type/Item";

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
export const getChampion = async (): Promise<ChampionData> => {
  try {
    const version = await getVersion();
    const champions = await fetch(CHAMPIONS_API(version), {
      next: {
        revalidate: 86400,
      },
    });
    const championsData: ChampionData = await champions.json();
    return championsData;
  } catch (error) {
    console.error("챔피언 api 에러: ", error);
  }
};

// 아이템 목록 api
export const getItem = async () => {
  try {
    const version = await getVersion();
    const items = await fetch(ITEM_API(version));
    const itemsData: Items = await items.json();
    return itemsData;
  } catch (error) {
    console.error("아이템 api 에러", error);
  }
};

// 챔피언 디테일 api
export const getCampDetail = async (
  id: string
): Promise<ChampDetail | null> => {
  try {
    const version = await getVersion();
    const campDetailRes = await fetch(CHAMPIONS_DETAIL_API(version, id), {
      cache: "no-store",
    });
    const campDetailData = await campDetailRes.json();

    // champDetailData.data[id]가 undefined인 경우 null을 반환
    return campDetailData.data[id] || null;
  } catch (error) {
    console.error("디테일 api 에러", error);
    return null; // 에러 발생 시 null 반환
  }
};
