import { Items } from "@/type/Item";
import { getItem } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemPage = async () => {
  const items = await getItem();
  const itemsArray: Items[] = Object.values(items.data);
  const version: Items[] = items.version;
  return (
    <div>
      <h1>아이템 목록</h1>
      {itemsArray.map((item) => {
        return (
          <div key={item.name}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
            />
            <p>{item.name}</p>
            <p>{item.plaintext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemPage;
