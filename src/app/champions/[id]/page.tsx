type Props = {
  params: {
    id: string;
  };
};

const DetailPage = async ({ params }: Props) => {
  return <div>id: {params.id}</div>;
};

export default DetailPage;
