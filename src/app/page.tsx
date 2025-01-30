import Footer from "@/components/custom/footer";
import ContactForm from "@/components/custom/form";
import Gallery from "@/components/custom/gallery";
import Hero from "@/components/custom/hero";
import MoreStatement from "@/components/custom/morestatement";
import Services from "@/components/custom/services";
import Statement from "@/components/custom/statement";
import Testimonial from "@/components/custom/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        <Hero
          className="w-full h-screen"
        />
        <Statement
          className=" p-4"
        />
        <MoreStatement
          className="min-h-screen "
        />
        <Gallery/>
        <Services/>
        <Testimonial
        />
        <ContactForm/>
        <Footer/>
    </main>
  );
}
