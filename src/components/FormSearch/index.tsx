"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FiSearch } from "react-icons/fi";

export function FormSearch() {
  const [input, setInput] = useState("");

  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const search = input.trim();

    if (!search) return;

    router.push(`/game/search/${search}`);
  }

  return (
    <form
      className="w-full h-12 flex items-center bg-slate-200 my-5 p-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Está procurando algum jogo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-200 flex-1 outline-none text-lg"
      />

      <button type="submit">
        <FiSearch size={24} className="text-orange-500" />
      </button>
    </form>
  );
}
