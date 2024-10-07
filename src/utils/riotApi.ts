import { Rotation } from "@/type/ChampionRotation";
import { getChampion } from "./serverApi";

export const getChampionRotation = async () => {
  try {
    const rotationRes = await fetch("/api/rotation");
    if (!rotationRes.ok) {
      throw new Error("로테이션 데이터를 가져오지 못했습니다!");
    }
    const rotationData: Rotation = await rotationRes.json();

    const championsData = await getChampion();

    if ("data" in championsData) {
      const rotationChampions = rotationData.data.freeChampionIds.map(
        (champId: number) => {
          // 챔피언 key는 문자열이므로 champId를 문자열로 변환해서 비교
          const championDetail = Object.values(championsData.data).find(
            (champ) => champ.key.toString() === champId.toString()
          );

          // championDetail이 존재하는지 확인
          if (!championDetail) {
            console.error(`챔피언 ID 정보가 없습니다.`);
            return null;
          }

          return {
            id: championDetail.id,
            name: championDetail.name,
            title: championDetail.title,
            image: championDetail.image.full,
            version: championDetail.version,
          };
        }
      );

      return rotationChampions;
    } else {
      console.error(championsData.message);
      return [];
    }
  } catch (error) {
    console.error("로테이션 api 에러?: ", error);
    return [];
  }
};
