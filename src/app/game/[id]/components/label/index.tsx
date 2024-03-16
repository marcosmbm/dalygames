interface LabelProps {
  title: string;
}

export function Label({ title }: LabelProps) {
  return (
    <div className="flex-grow sm:flex-grow-0 bg-slate-200 py-1 px-3 text-black text-center rounded-lg hover:font-bold duration-300 cursor-pointer">
      <h1>{title}</h1>
    </div>
  );
}
