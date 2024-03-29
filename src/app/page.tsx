import Link from "next/link";
import Image from "next/image";

import { BsArrowRightSquare } from "react-icons/bs";

import { Container } from "@/components/Container";
import { FormSearch } from "@/components/FormSearch";
import { GameCard } from "@/components/GameCard";

import { httpRequest } from "@/services/httpRequest";
import type { GameProps } from "@/utils/types/Game";

async function getDalyGame() {
  return await httpRequest({
    endpoint: "/?api=game_day",
    revalidate: 320,
  });
}

async function getGameData() {
  return await httpRequest({
    endpoint: "/?api=games",
    revalidate: 320,
  });
}
export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  const games: GameProps[] = await getGameData();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full h-96 max-h-96 relative">
              <div className="absolute z-20 bottom-2 left-2 flex items-center gap-2">
                <p className="font-bold text-xl text-white">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>

              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority
                quality={100}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                className="max-h-96 object-cover rounded-lg hover:opacity-50 duration-300"
              />
            </div>
          </section>
        </Link>

        <FormSearch />

        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((item) => (
            <GameCard key={item.id} game={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
