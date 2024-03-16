interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <section className="max-w-screen-xl mx-auto px-3">{children}</section>;
}
