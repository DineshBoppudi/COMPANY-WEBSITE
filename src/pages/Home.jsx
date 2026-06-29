import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustedCompanies from "../components/sections/TrustedCompanies";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />

  <div className="bg-white">
    <TrustedCompanies />
  </div>

  <Services />

  <div className="bg-white">
    <Portfolio />
  </div>
  <Process />


  <Testimonials />
  <CTA />
  <Footer />
</>
  );
}