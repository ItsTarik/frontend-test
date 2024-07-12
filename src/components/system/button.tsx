import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={twMerge(
        "font-sans text-white py-2 px-7 rounded-[40px] hover:scale-105 transition-all",
        props.variant === "primary" && "bg-red-primary",
        props.variant === "secondary" && "bg-yellow-400"
      )}
    >
      {props.label}
    </button>
  );
}
