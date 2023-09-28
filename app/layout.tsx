import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { roboto } from "./helper/font/font";

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
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} text-gray-700`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
