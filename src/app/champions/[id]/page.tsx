const CHAMPION_DETAIL_API = (version: string, id: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`;

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = async ({ params }: Props) => {
  return <div>id: {params.id}</div>;
};

export default DetailPage;
