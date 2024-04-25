import Banner from "@/components/Banner";
import HomeGrid from "@/components/HomeGrid";
import Quote from "@/components/Quote";
import { title } from "process";

export default function Home() {
  return (
    <main className="flex-col bg-white">
      <Banner />
      <Quote />
      <HomeGrid />
    </main>
  );
}
