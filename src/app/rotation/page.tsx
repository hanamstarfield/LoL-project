"use client";

import { Champion } from "@/type/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
  const [rotationData, setRotationData] = useState<Champion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setLoading(true);
        const data = await getChampionRotation();
        setRotationData(data);
      } catch {
        setError("데이터를 받아오는 중 에러발생.");
      } finally {
        setLoading(false);
      }
    };
    fetchRotationData();
  }, []);

  if (loading) return <div> 로테이션 페이지 로딩 중...</div>;
  if (error) return <div>로테이션 페이지 에러!</div>;

  return (
    <div className="flex flex-col items-center p-4 min-h-screen ">
      <h1 className="text-3xl font-bold mb-6">이번 주 챔피언 로테이션</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {rotationData.map((champion) => (
          <Link
            href={`/champions/${champion.id}`}
            key={champion.id}
            className="border border-gray-300 p-4 rounded-lg text-center bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image}`}
              alt={champion.name}
              className="mx-auto mb-2 rounded"
              width={100}
              height={100}
            />
            <p className="font-bold text-lg">{champion.name}</p>
            <p className="text-gray-500">{champion.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
