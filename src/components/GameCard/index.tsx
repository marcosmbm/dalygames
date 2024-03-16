import Link from "next/link";
import Image from "next/image";

import { BiRightArrowCircle } from "react-icons/bi";

import type { GameProps } from "@/utils/types/Game";

interface GameCardProps {
  game: GameProps;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.id}`}>
      <div className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 duration-300">
          <Image
            src={game.image_url}
            alt={game.title}
            quality={100}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <strong className="w-full truncate overflow-hidden">
            {game.title}
          </strong>

          <BiRightArrowCircle size={24} className="text-black" />
        </div>
      </div>
    </Link>
  );
}
