import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import About from '../components/About';
import History from '../components/History';
import Motivation from '../components/Motivation';
import QuoteSection from '../components/Quote';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Testimonials from "../components/Testimonials";
import Footer from '../components/Footer';  
import dynamic from "next/dynamic";


const CookieConsent = dynamic(() => import("../components/CookieConsent"), { ssr: false });


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* Sección de características inspirada en la estética de Salutissimo */}
      <Features />
      {/* Llamada a la acción para reservar una sesión */}
      <CallToAction />
      <About />
      <History/>
      <Motivation />
      <QuoteSection />
      {/* <Service /> */} 
      <Gallery />
      <Contact />
      <Testimonials />
      <Footer />
      <CookieConsent/>
    </>
  );
}