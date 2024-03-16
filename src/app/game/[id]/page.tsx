import { redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Label } from "./components/label";
import { GameCard } from "@/components/GameCard";

import { httpRequest } from "@/services/httpRequest";
import type { GameProps } from "@/utils/types/Game";

interface GameDetailProps {
  params: {
    id: number;
  };
}

export async function generateMetadata({
  params,
}: GameDetailProps): Promise<Metadata> {
  try {
    const response: GameProps = await httpRequest({
      endpoint: `/?api=game&id=${params.id}`,
      cache: "no-store",
    });

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "DalyGames - Descubra jogos incríveis para se divertir.",
    };
  }
}

async function getData(id: number) {
  return await httpRequest({
    endpoint: `/?api=game&id=${id}`,
    cache: "no-store",
  });
}

async function getGameSorted() {
  return await httpRequest({
    endpoint: "/?api=game_day",
    cache: "no-store",
  });
}

export default async function GameDetail({ params }: GameDetailProps) {
  const data: GameProps | null = await getData(params.id);
  const gameSorted: GameProps = await getGameSorted();

  if (!data) {
    return redirect("/");
  }

  return (
    <Container>
      <div className="w-full bg-black h-80 relative rounded-lg mt-4">
        <Image
          src={data.image_url}
          alt={data.title}
          fill={true}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          className="max-h-96 object-cover rounded-lg hover:opacity-50 duration-300 opacity-80"
        />
      </div>

      <h1 className="my-4 text-xl font-bold">{data.title}</h1>

      <p className="text-justify">{data.description}</p>

      <h2 className="my-4 text-lg font-bold mt-7 mb-2">
        Plataformas disponíveis:
      </h2>
      <div className="flex gap-2 flex-wrap">
        {data.platforms.map((item) => (
          <Label key={item} title={item} />
        ))}
      </div>

      <h2 className="my-4 text-lg font-bold mt-7 mb-2">Categorias</h2>
      <div className="flex gap-2 flex-wrap">
        {data.categories.map((item) => (
          <Label key={item} title={item} />
        ))}
      </div>

      <p className="mt-7 mb-2">
        <strong>Data de lançamento: </strong>
        {data.release}
      </p>

      <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado</h2>
      <GameCard game={gameSorted} />
    </Container>
  );
}
