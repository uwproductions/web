import Banner from "@/components/Banner";
import OurLatestWorks from "@/components/OurLatestWorks";
import Quote from "@/components/Quote";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="flex-col bg-white">
      <Banner />
      <Quote
        text="You don’t love someone for their looks, or their clothes or their
          fancy car, but because they sing a song only you can hear."
        showVector
      />
      <OurLatestWorks limit={6} />
      <ContactForm />
    </main>
  );
}
