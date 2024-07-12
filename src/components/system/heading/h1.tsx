export function H1({ title }: { title: string }) {
  return (
    <h1 className="font-sans text-highContrast font-bold text-base md:text-[30px] uppercase">
      {title}
    </h1>
  );
}
