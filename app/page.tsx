import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Canon from "./components/Canon";
import Pillars from "./components/Pillars";
import Bobby from "./components/Bobby";
import SolrayAI from "./components/SolrayAI";
import TattooRemoval from "./components/TattooRemoval";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Canon />
      <Pillars />
      <Bobby />
      <TattooRemoval />
      <SolrayAI />
      <Footer />
    </main>
  );
}
