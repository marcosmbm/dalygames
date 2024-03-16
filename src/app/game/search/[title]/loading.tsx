import { Container } from "@/components/Container";

import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <Container>
      <section className="w-full h-[calc(100vh_-_7rem)] flex items-center justify-center">
        <FaSpinner size={50} className="text-orange-500 animate-spin" />
      </section>
    </Container>
  );
}
