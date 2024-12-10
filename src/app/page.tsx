import ContactForm from "@/components/customs/contactform";
import FAQ from "@/components/customs/faq";
import FeaturedProducts from "@/components/customs/services";
import Hero from "@/components/customs/hero";
import More from "@/components/customs/more";
import NavBar from "@/components/customs/navbar";
import Services from "@/components/customs/products";
import Testimonials from "@/components/customs/testimonials";

export default function Home() {
  return (
   <main className="scroll-smooth bg-primarygray  ">
    
    <NavBar 
      className="bg-secondarydark px-4  text-white "
      />
    <Hero/>
    <Services/>
    <FeaturedProducts/>
    <FAQ/>
    <Testimonials/>
    <More/>
    <ContactForm/>
   </main>
  );
}
