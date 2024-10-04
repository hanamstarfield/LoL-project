import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen  p-4">
      <h1 className="text-4xl font-bold mb-4">리그 오브 레전드 정보 앱</h1>
      <h3 className="text-xl mb-6">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </h3>

      <Link href={"/champions"} className="flex flex-col items-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg`}
          alt="Sett"
          width={500}
          height={500}
        />
        <span className="mt-2 text-xl font-semibold p-4">챔피언 목록 보기</span>
      </Link>
      <Link href={"/rotation"} className="flex flex-col items-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg`}
          alt="Teemo"
          width={500}
          height={500}
        />
        <span className="mt-2 text-xl font-semibold p-4">
          금주 로테이션 확인
        </span>
      </Link>
      <Link href={"/items"} className="flex flex-col items-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg`}
          alt="Ornn"
          width={500}
          height={500}
        />
        <span className="mt-2 text-xl font-semibold p-4">아이템 보기</span>
      </Link>
    </div>
  );
}
