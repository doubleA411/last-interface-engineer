import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Last Interface Engineer — Aakash Suresh",
  description:
    "Fullstack Engineer building AI agents, orchestration systems, and the interfaces that control them.",
  openGraph: {
    title: "The Last Interface Engineer — Aakash Suresh",
    description:
      "Fullstack Engineer building AI agents, orchestration systems, and the interfaces that control them.",
    images: [
      {
        url: "https://res.cloudinary.com/dolxoxj41/image/upload/v1778622769/man_yyb6mk.jpg",
        width: 1200,
        height: 630,
        alt: "Aakash Suresh — The Last Interface Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Interface Engineer — Aakash Suresh",
    description:
      "Fullstack Engineer building AI agents, orchestration systems, and the interfaces that control them.",
    images: ["https://res.cloudinary.com/dolxoxj41/image/upload/v1778622769/man_yyb6mk.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
