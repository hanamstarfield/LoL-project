export const getChampionRotation = async () => {
  try {
    const res = await fetch("/api/rotation", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("로테이션 데이터를 가져오지 못했습니다!");
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("로테이션 api 에러?: ", error);
  }
};
