import { H1 } from "@/components/system/heading/h1";

export function NewslettersHeader() {
  return (
    <header className="flex flex-col items-center bg-microContrast p-4 rounded-lg space-y-1 md:space-y-3">
      <H1 title="Newsletters" />
      <p className="font-sans md:text-base text-sm text-center text-highContrast">
        Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et
        des marques satellites. Ainsi, vous pouvez découvrir toutes nos
        newsletters selon vos centres d’intérêt et gérer plus facilement
        l’inscription à vos newsletters.
      </p>
    </header>
  );
}
