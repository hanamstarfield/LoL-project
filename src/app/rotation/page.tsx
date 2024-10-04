"use client";

import { getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
  const [rotationData, setRotationData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setLoading(true);
        const data = await getChampionRotation();
        setRotationData(data);
      } catch (err) {
        setError("데이터를 받아오는 중 에러발생.");
      } finally {
        setLoading(false);
      }
    };
    fetchRotationData();
  }, []);
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러!</div>;

  return (
    <div>
      <h1>이번 주 챔피언 로테이션</h1>
      <div className="grid grid-cols-3 gap-4">
        {" "}
        {/* Tailwind CSS를 사용하여 그리드 레이아웃 */}
        {rotationData.map((champion) => (
          <Link href={`/champions/${champion.id}`} key={champion.id}>
            <div className="border p-4 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image}`}
                alt={champion.name}
                className="mx-auto mb-2"
                width={100}
                height={100}
              />
              <p className="font-bold">{champion.name}</p>
              <p>{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
