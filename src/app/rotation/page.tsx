"use client";

import { getChampionRotation } from "@/utils/riotApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
  const [rotationData, setRotationData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setLoading(true);
        const data = await getChampionRotation();
        setRotationData(data.freeChampionIds);
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
      <div>
        {rotationData.map((champ) => {
          return (
            <Link href={`/champions/${champ}`} key={champ}>
              <p>{champ}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RotationPage;
