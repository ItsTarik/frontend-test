import { twMerge } from "tailwind-merge";

export function H3({ title, className }: { title: string; className: string }) {
  return (
    <h3
      className={twMerge(
        "font-merriweather font-bold text-lg md:text-[30px]",
        className
      )}
    >
      {title}
    </h3>
  );
}
