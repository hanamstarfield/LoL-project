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

  if ("message" in champDetail) {
    return <div>{champDetail.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-2 text-center">
        {champDetail.name}
      </h1>
      <p className="text-xl text-gray-600 text-center mb-4">
        {champDetail.title}
      </p>

      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champDetail.id}_0.jpg`}
        alt={champDetail.name}
        width={1000}
        height={1000}
      />

      <p className="text-gray-700 mb-4">{champDetail.blurb}</p>

      <h3 className="text-2xl font-semibold mb-2">스탯</h3>
      <div className="bg-gray-100 p-4 rounded-md">
        <ul className="list-disc list-inside">
          <li className="mb-2">
            공격력: <span className="font-bold">{champDetail.info.attack}</span>
          </li>
          <li className="mb-2">
            방어력:{" "}
            <span className="font-bold">{champDetail.info.defense}</span>
          </li>
          <li className="mb-2">
            마법력: <span className="font-bold">{champDetail.info.magic}</span>
          </li>
          <li className="mb-2">
            난이도:{" "}
            <span className="font-bold">{champDetail.info.difficulty}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
