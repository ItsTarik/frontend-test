export function H2({ title }: { title: string }) {
  return (
    <h2
      className={
        "font-sans uppercase w-fit font-bold text-lg md:text-[22px] text-highContrast"
      }
    >
      {title}
    </h2>
  );
}
