import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Defi from "@/components/Defi";
import Journey from "@/components/Journey";
import Marie from "@/components/Marie";
import Sante from "@/components/Sante";
import Aide from "@/components/Aide";
import Temoigner from "@/components/Temoigner";
import Benevoles from "@/components/Benevoles";
import Contact from "@/components/Contact";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Defi />
        <Journey />
        <Marie />
        <Sante />
        <Aide />
        <Temoigner />
        <Benevoles />
        <Contact />
      </main>
      <SiteEffects />
    </>
  );
}
