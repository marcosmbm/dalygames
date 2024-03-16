import { Container } from "@/components/Container";
import { FormSearch } from "@/components/FormSearch";
import { GameCard } from "@/components/GameCard";

import { httpRequest } from "@/services/httpRequest";
import type { GameProps } from "@/utils/types/Game";

interface SearchProps {
  params: {
    title: string;
  };
}

async function getData(title: string) {
  return await httpRequest({
    endpoint: `/?api=game&title=${title}`,
  });
}

export default async function Search({ params }: SearchProps) {
  const data: GameProps[] | null = await getData(params.title);

  return (
    <Container>
      <FormSearch />

      <h1 className="font-bold text-xl mt-8 mb-5">
        Veja oque encontramos na nossa base:
      </h1>

      {!data && <p>Esse jogo não foi encontrado!...</p>}

      {data && (
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <GameCard key={item.id} game={item} />
          ))}
        </section>
      )}
    </Container>
  );
}
