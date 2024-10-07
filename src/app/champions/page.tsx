import { Champion } from "@/type/Champion";
import { getChampion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";

const ChampionsPage = async () => {
  const championsData = await getChampion();

  if ("message" in championsData) {
    return <div>{championsData.message}</div>;
  }

  if (!championsData.data) {
    return <div>챔피언 데이터가 없습니다.</div>;
  }
  // championsData가 객체 형태이므로 Object.values()를 사용하여 배열로 변환
  const championArray: Champion[] = Object.values(championsData.data);

  return (
    <div className="flex flex-col items-center p-4 min-h-screen ">
      <h1 className="text-3xl font-bold mb-6">챔피언 목록</h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {championArray.map((champ) => (
            <Link
              href={`/champions/${champ.id}`}
              key={champ.id}
              className="border border-gray-300 p-4 rounded-lg text-center bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${champ.version}/img/champion/${champ.image.full}`}
                alt={champ.name}
                width={100}
                height={100}
                className="mx-auto mb-2 rounded"
              />
              <p className="font-bold text-lg">{champ.name}</p>
              <p className="text-gray-500">{champ.title}</p>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default ChampionsPage;
