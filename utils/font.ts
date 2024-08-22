import { Roboto, Urbanist } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});
