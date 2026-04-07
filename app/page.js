import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}