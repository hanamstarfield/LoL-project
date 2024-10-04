import { getCampDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.id;
  const champDetail = await getCampDetail(id);

  if ("message" in champDetail) {
    return {
      title: "챔피언을 찾을 수 없습니다.",
    };
  }

  return {
    title: champDetail.name,
  };
};

const DetailPage = async ({ params }: Props) => {
  const champDetail = await getCampDetail(params.id);

  if ("message" in champDetail || !champDetail) {
    return <div>챔피언 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{champDetail.name}</h1>
      <p>{champDetail.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champDetail.id}_0.jpg`}
        alt={champDetail.name}
        width={1000}
        height={1000}
      />
      <p>{champDetail.blurb}</p>
      <h3>스탯</h3>
      <div>
        <ul>
          <li>공격력: {champDetail.info.attack}</li>
          <li>방어력: {champDetail.info.defense}</li>
          <li>마법력: {champDetail.info.magic}</li>
          <li>난이도: {champDetail.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
