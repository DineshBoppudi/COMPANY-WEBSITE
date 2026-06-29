import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustedCompanies from "../components/sections/TrustedCompanies";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustedCompanies />

      <Services />

      <Portfolio />

      <Process />

      <Stats />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}