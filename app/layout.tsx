import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { roboto } from "./helper/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Prioritizer",
  description:
    "Technique to figure out what the priority of your tasks are via assigning them to categories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${inter.className} ${roboto.className} bg-gray-800 text-gray-300 flex flex-col min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
