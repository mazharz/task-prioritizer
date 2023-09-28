import { Cinzel, Roboto } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "variable",
  // variable: "--font-cinzel",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
