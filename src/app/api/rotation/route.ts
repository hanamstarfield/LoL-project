import { Rotation } from "@/type/ChampionRotation";

const API_KEY = process.env.RIOT_API_KEY as string;

export async function GET() {
  const res = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-Riot-Token": API_KEY,
      },
    }
  );
  if (!res.ok) {
    throw new Error("로테이션 api 에러!!!");
  }

  const data: Rotation = await res.json();
  return Response.json({ data });
}
