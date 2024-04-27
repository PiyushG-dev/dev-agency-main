import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <section className="w-full">
        <div className="screen-max-width">
          <Testimonial />
        </div>
      </section>
      <Services />
    </>
  );
}
