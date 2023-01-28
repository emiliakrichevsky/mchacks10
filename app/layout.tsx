import "./globals.css";
import { Amiko, Actor } from "@next/font/google";

const amiko = Amiko({weight:"400", variable: "--display-font"});
const actor = Actor({weight:"400", variable: "--body-font"});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${amiko.variable} ${actor.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
