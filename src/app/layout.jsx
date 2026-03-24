import { JetBrains_Mono, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Ronan Renz Valencia | Frontend Developer",
  description:
    "CS Graduate & Frontend Developer based in the Philippines. Building clean, intuitive user interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${syne.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
