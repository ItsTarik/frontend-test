import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Echos Nesletters",
  description: "React/Next test using App router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
