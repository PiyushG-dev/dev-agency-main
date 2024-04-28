import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
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
      {/* <Features /> */}
      <Projects />
      <Pricing />
    </>
  );
}
