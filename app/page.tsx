import Banner from "@/app/(sections)/Banner";
import OurLatestWorks from "@/app/(sections)/OurLatestWorks";
import Quote from "@/app/(sections)/Quote";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex-col bg-white">
      <Banner />
      <Quote />
      <OurLatestWorks />
      <Contact />
    </main>
  );
}
