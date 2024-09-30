import { Champion } from "@/type/Champion";
import { getChampion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const ChampionsPage = async () => {
  const { championsData } = await getChampion();

  // championsData가 객체 형태이므로 Object.values()를 사용하여 배열로 변환
  const championArray: Champion[] = Object.values(championsData.data);
  const version: Champion[] = championsData.version;

  return (
    <div>
      {championArray.map((champ) => {
        return (
          <Link href={`/champions/${champ.id}`} key={champ.id}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
              alt={champ.name}
              width={100}
              height={100}
            />
            <p>{champ.name}</p>
            <p>{champ.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ChampionsPage;
