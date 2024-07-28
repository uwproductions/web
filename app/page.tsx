import Banner from "@/components/Banner";
import OurLatestWorks from "@/components/OurLatestWorks";
import Quote from "@/app/(sections)/Quote";
import ContactForm from "./(sections)/ContactForm";

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
