import Banner from "@/components/Banner";
import OurLatestWorks from "@/components/OurLatestWorks";
import Quote from "@/components/Quote";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="flex-col bg-white">
      <Banner />
      <Quote />
      <OurLatestWorks limit={6} />
      <ContactForm />
    </main>
  );
}
