import { Items } from "@/type/Item";
import { getItem } from "@/utils/serverApi";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "../loading";

const ItemPage = async () => {
  const items = await getItem();

  if ("message" in items) {
    return <div>{items.message}</div>;
  }

  const itemsArray: Items[] = Object.values(items.data);
  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">아이템 목록</h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {itemsArray.map((item) => {
            return (
              <div
                key={item.image.full}
                className="border border-gray-300 p-4 rounded-lg text-center bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${items.version}/img/item/${item.image.full}`}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-2 rounded"
                />
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-500">{item.plaintext}</p>
              </div>
            );
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default ItemPage;
