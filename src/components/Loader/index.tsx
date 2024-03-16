import { FaSpinner } from "react-icons/fa";

export function Loader() {
  return (
    <section className="w-full h-[calc(100vh_-_7rem)] flex items-center justify-center">
      <FaSpinner size={50} className="text-orange-500 animate-spin" />
    </section>
  );
}
